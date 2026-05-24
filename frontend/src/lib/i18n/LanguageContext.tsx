"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "./dictionaries/en";
import { te } from "./dictionaries/te";

type Language = "en" | "te";
type Dictionary = typeof en;

// Utility to recursively get a value from the dictionary by key path (e.g., "nav.about")
const getNestedValue = (obj: any, path: string): string => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) || path;
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLang = localStorage.getItem("site-lang") as Language;
    if (storedLang === "en" || storedLang === "te") {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("site-lang", lang);
  };

  const t = (key: string): string => {
    if (!isMounted) {
      // Return English during SSR to prevent hydration mismatch
      return getNestedValue(en, key);
    }
    const dictionary = language === "en" ? en : te;
    return getNestedValue(dictionary, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
