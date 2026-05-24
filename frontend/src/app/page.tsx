"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, HeartHandshake, AlertCircle, MapPin, CheckCircle, Users, Mail, Phone, X, ChevronLeft, ChevronRight, Calendar, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";

// ------------------------------------
// GALLERY DATA
// ------------------------------------
const MEDIA_ARCHIVE = [
  { id: 1, src: "/gallery/Delight/D1.jpeg", category: "Events", tag: "Public Address", alt: "Addressing the constituency gathering", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: "/gallery/Par_core_3.jpeg", category: "Public Work", tag: "Governance", alt: "Legislative session and discussions", span: "col-span-1 row-span-1" },
  { id: 3, src: "/gallery/Social work/GoodSeed_2.jpeg", category: "Social Work", tag: "Education", alt: "School kit distribution", span: "col-span-1 row-span-1" },
  { id: 4, src: "/gallery/Delight/DH.jpeg", category: "Portraits", tag: "Leadership", alt: "Official portrait of Kunche Ramanarao", span: "col-span-1 row-span-2" },
  { id: 5, src: "/gallery/Praise_1.jpeg", category: "Public Work", tag: "Community", alt: "Meeting local leaders", span: "col-span-1 row-span-1" },
  { id: 6, src: "/gallery/core_1.jpeg", category: "Crisis", tag: "Emergency Relief", alt: "Crisis management and rapid response", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 7, src: "/gallery/Praise_2.jpeg", category: "Events", tag: "Public Rally", alt: "Addressing a large public gathering", span: "col-span-1 row-span-2" },
  { id: 8, src: "/gallery/Social work/GoodSeed_3.jpeg", category: "Crisis", tag: "Relief Work", alt: "Flood relief material distribution", span: "col-span-1 row-span-1" },
  { id: 9, src: "/gallery/Par_core_1.jpeg", category: "Public Work", tag: "Governance", alt: "Reviewing infrastructure projects", span: "col-span-1 row-span-1" },
  { id: 10, src: "/gallery/Social work/GoodSeed_5.jpeg", category: "Social Work", tag: "Infrastructure", alt: "Water plant inauguration", span: "col-span-1 row-span-1" },
  { id: 11, src: "/gallery/Delight/D2.jpeg", category: "Events", tag: "Campaign", alt: "Connecting with the youth", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 12, src: "/gallery/Delight/D4.jpeg", category: "Events", tag: "Rally", alt: "Leading the constituency rally", span: "col-span-1 row-span-1" },
  { id: 13, src: "/gallery/Par_core_2.jpeg", category: "Public Work", tag: "Field Visit", alt: "Inspecting local development sites", span: "col-span-1 row-span-1" },
  { id: 14, src: "/gallery/Social work/GoodSeed_1.jpeg", category: "Social Work", tag: "Health Camp", alt: "Free medical camp", span: "col-span-1 md:col-span-2 row-span-1" },
];

const FILTER_CATEGORIES = ["All", "Public Work", "Social Work", "Crisis", "Events", "Portraits"];

const SOCIAL_FEED_ITEMS = [
  {
    id: 1,
    date: "May 22, 2026",
    category: "Field Visit",
    content: "Inspected the ongoing construction of the new water purification plant in the rural sector. Clean drinking water is a fundamental right, not a privilege. Progress is swift, and we expect completion before the monsoons.",
    image: "/gallery/Social work/GoodSeed_5.jpeg",
    likes: 342,
    comments: 28,
  },
  {
    id: 2,
    date: "May 18, 2026",
    category: "Community Health",
    content: "The Mega Health Camp organized by the Good Seed Foundation successfully treated over 1,500 citizens today. True leadership is measured by the health and happiness of its people.",
    image: "/gallery/Social work/GoodSeed_1.jpeg",
    likes: 512,
    comments: 45,
  },
  {
    id: 3,
    date: "May 10, 2026",
    category: "Education",
    content: "Distributed complete school kits to 500+ students from marginalized communities. Education is the greatest equalizer, and we are committed to empowering our youth.",
    image: "/gallery/Social work/GoodSeed_2.jpeg",
    likes: 890,
    comments: 67,
  }
];

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery = MEDIA_ARCHIVE.filter(item => 
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-primary/20">
      
      {/* 1. CINEMATIC STATIC HERO */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/Moto_main.png"
            alt="Kunche Ramanarao Campaign"
            fill
            priority
            className="object-cover object-top opacity-80"
          />
          {/* Heavy Dark Gradient Overlay for Readability & Drama */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/20"></div>
          
          {/* Subtle Campaign Tint */}
          <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
          
          {/* Extra dark bottom block to ensure smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1800px] relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-40 lg:pb-32 text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-3xl space-y-6 md:space-y-8 pt-32 lg:pt-0"
          >
            {/* Monumental Slogan */}
            <h1 className="hidden md:block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1] drop-shadow-2xl">
              {t("home.hero.slogan1")} <br className="hidden md:block" />
              <span className="text-white opacity-90 block mt-2">{t("home.hero.slogan2")}</span>
            </h1>
            
            {/* Supporting Trust Line */}
            <p className="text-[11px] sm:text-sm md:text-2xl lg:text-3xl text-slate-200 font-bold tracking-[0.2em] uppercase leading-relaxed max-w-3xl border-l-2 border-secondary/50 pl-4 md:pl-6 mx-auto md:mx-0 text-left">
              {t("home.hero.trust")}
            </p>
            
            {/* CTA Zone */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 justify-center md:justify-start">
              <Link href="#work" className="w-full sm:w-auto">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-slate-900 rounded-none h-14 md:h-16 px-10 md:px-12 text-sm md:text-base font-black uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02]">
                  {t("home.hero.join")}
                </Button>
              </Link>
              <Link href="#social" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full bg-slate-900/50 border-slate-500 text-white hover:bg-slate-900/80 hover:border-slate-400 rounded-none h-14 md:h-16 px-10 md:px-12 text-sm md:text-base font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm transition-all">
                  {t("home.hero.explore")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white/80 mb-3 drop-shadow-md">{t("home.hero.scroll")}</span>
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[3px] h-12 lg:h-16 bg-gradient-to-b from-secondary to-transparent"
          />
        </motion.div>
      </section>

      {/* 2. LEADERSHIP PROFILE (ABOUT) */}
      <section id="about" className="py-12 md:py-20 lg:py-32 bg-white relative z-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 skew-x-12 transform origin-top-right"></div>
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Dual Image Collage */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative group h-full min-h-[500px]"
            >
              {/* Primary Portrait */}
              <div className="absolute top-0 right-4 w-3/4 aspect-[4/5] rounded-none overflow-hidden shadow-2xl z-20 bg-slate-100 border-4 border-white">
                <Image 
                  src="/gallery/Delight/DH.jpeg" 
                  alt="Kunche Ramanarao Official Portrait" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Secondary Field Shot */}
              <div className="absolute bottom-4 left-0 w-2/3 aspect-square rounded-none overflow-hidden shadow-xl z-30 bg-slate-100 border-4 border-white">
                <Image 
                  src="/gallery/Praise_2.jpeg" 
                  alt="Kunche Ramanarao Public Rally" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white z-40">
                  <span className="text-[10px] font-bold tracking-widest uppercase">{t("home.about.fieldPresence")}</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-4 w-24 h-24 bg-[radial-gradient(circle_at_center,#1e3a8a_1px,transparent_1px)] bg-[size:8px_8px] opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right: Narrative Block */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-3"
              >
                <div className="w-8 h-px bg-primary"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  {t("home.about.tag")}
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter"
              >
                {t("home.about.title")}
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-lg text-slate-600 font-light leading-relaxed border-l border-slate-200 pl-6"
              >
                <p>
                  {t("home.about.p1")}
                </p>
                <p>
                  {t("home.about.p2")}
                </p>
              </motion.div>

              {/* Highlight Points - edX style cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Users, title: "Unity & Inclusion", desc: "Service delivered to every doorstep." },
                  { icon: MapPin, title: "Amalapuram Vision", desc: "A roadmap for robust infrastructure." },
                  { icon: HeartHandshake, title: "People Above Politics", desc: "Prioritizing community welfare." },
                  { icon: CheckCircle, title: "Accountable Action", desc: "Acting today, equipped for tomorrow." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                    className="flex items-start space-x-4 p-5 rounded-none border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-200 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-wide">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Trust Stats Block */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 md:pt-10 mt-8 md:mt-10 border-t border-slate-200"
              >
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">50+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">{t("home.about.stats.villages")}</span>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">5K+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">{t("home.about.stats.grievances")}</span>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
                <div className="flex flex-col mt-4 md:mt-0 flex-1">
                  <Link href="#work">
                    <Button variant="link" className="text-primary hover:text-primary/80 font-bold px-0 uppercase tracking-widest text-xs">
                      {t("home.about.learnMore")} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOD SEED FOUNDATION DEEP INTEGRATION */}
      <section id="foundation" className="py-12 md:py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-px bg-secondary"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                  {t("home.foundation.tag")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                {t("home.foundation.title")}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {t("home.foundation.desc")}
              </p>
              <Link href="/foundation" className="inline-block">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-12 px-8 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-[1.02]">
                  {t("home.foundation.initiatives")}
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative w-full aspect-video rounded-none overflow-hidden shadow-2xl border border-slate-200 bg-white group">
                <Image 
                  src="/gallery/Social work/GoodSeed_4.jpeg" 
                  alt="Good Seed Foundation Team" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw" 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 border-l-2 border-secondary inline-block">
                    <p className="text-white text-sm font-medium italic">"Leadership is measured by the lives you touch."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Cards - edX Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Health */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/Social work/GoodSeed_1.jpeg" alt="Health Camps" className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  {t("categories.health")}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{language === 'te' ? "ఉచిత వైద్య శిబిరాలు" : "Free Health Camps"}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  {t("home.foundation.list.health")}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
                  <span>Amalapuram Rural</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Governance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/Par_core_2.jpeg" alt="Governance" className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  {t("categories.infrastructure")}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{language === 'te' ? "మౌలిక సదుపాయాల అభివృద్ధి" : "Infrastructure Development"}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  {t("home.foundation.list.water")}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
                  <span>Constituency</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Crisis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex flex-col bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/core_1.jpeg" alt="Crisis Relief" className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-600 shadow-sm">
                  {t("categories.emergency")}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{language === 'te' ? "విపత్తు నిర్వహణ" : "Disaster Response"}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  {t("home.foundation.list.education")}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
                  <span>Rapid Action</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL STYLE FEED (LIVING UPDATES) */}
      <section id="updates" className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4 md:mb-6">
              {t("home.feed.title")}
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              {t("home.feed.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOCIAL_FEED_ITEMS.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.category} className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {language === 'te' && post.category === 'Field Visit' ? 'క్షేత్ర పర్యటన' : language === 'te' && post.category === 'Community Health' ? 'కమ్యూనిటీ హెల్త్' : language === 'te' && post.category === 'Education' ? 'విద్య' : post.category}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
                    {language === 'te' && post.id === 1 ? "గ్రామీణ ప్రాంతంలో నూతన నీటి శుద్ధి కర్మాగారం నిర్మాణ పనులను పరిశీలించారు. పనులు వేగంగా జరుగుతున్నాయి." : language === 'te' && post.id === 2 ? "మెగా హెల్త్ క్యాంప్ ద్వారా 1,500 మందికి ఉచిత వైద్యం అందించాం. ప్రజల ఆరోగ్యమే మా ప్రాధాన్యత." : language === 'te' && post.id === 3 ? "500 మంది విద్యార్థులకు ఉచిత పాఠశాల కిట్లను పంపిణీ చేశాం. విద్య ద్వారానే అసలైన సాధికారత సాధ్యం." : post.content}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <div className="flex space-x-6">
                      <button className="flex items-center hover:text-primary transition-colors">
                        <HeartHandshake className="w-4 h-4 mr-2" /> {post.likes}
                      </button>
                      <button className="flex items-center hover:text-primary transition-colors">
                        <MessageSquare className="w-4 h-4 mr-2" /> {post.comments}
                      </button>
                    </div>
                    <button className="hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="bg-white border-slate-300 text-slate-900 hover:bg-slate-50 rounded-none h-14 px-10 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm">
              {t("home.feed.readMore")}
            </Button>
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC MASONRY GALLERY WALL (MEDIA ARCHIVE) */}
      <section id="social" className="py-12 md:py-20 lg:py-32 bg-slate-100 border-t border-slate-200 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-3xl"
            >
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-px bg-primary"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  {t("home.archive.tag")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
                {t("home.archive.title")}
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
                {t("home.archive.desc")}
              </p>
            </motion.div>
          </div>

          {/* Filter Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeFilter === cat 
                    ? "bg-primary text-white border-primary shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary/30 hover:bg-slate-50"
                }`}
              >
                {t(cat === 'All' ? 'categories.all' : cat === 'Public Work' ? 'categories.publicWork' : cat === 'Social Work' ? 'categories.socialWork' : cat === 'Crisis' ? 'categories.crisis' : cat === 'Events' ? 'categories.events' : 'categories.portraits')}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filteredGallery.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImageIndex(i)}
                  className="break-inside-avoid relative rounded-none overflow-hidden group bg-slate-50 shadow-md border border-slate-200 cursor-zoom-in mb-4"
                >
                <div className="relative w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.03]" loading="lazy" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                    <span className="text-[10px] font-bold bg-primary text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block shadow-sm">
                      {language === 'te' ? (item.tag === 'Public Address' ? 'బహిరంగ సభ' : item.tag === 'Governance' ? 'పరిపాలన' : item.tag === 'Education' ? 'విద్య' : item.tag === 'Leadership' ? 'నాయకత్వం' : item.tag === 'Community' ? 'కమ్యూనిటీ' : item.tag === 'Emergency Relief' ? 'అత్యవసర సహాయం' : item.tag === 'Public Rally' ? 'బహిరంగ సభ' : item.tag === 'Relief Work' ? 'సహాయక చర్యలు' : item.tag === 'Infrastructure' ? 'మౌలిక సదుపాయాలు' : item.tag === 'Campaign' ? 'ప్రచారం' : item.tag === 'Rally' ? 'ర్యాలీ' : item.tag === 'Field Visit' ? 'క్షేత్ర పర్యటన' : item.tag === 'Health Camp' ? 'వైద్య శిబిరం' : item.tag) : item.tag}
                    </span>
                    <p className="text-white font-bold text-xl md:text-2xl leading-tight transition-colors duration-300">
                      {language === 'te' ? 'కార్యక్రమ దృశ్యం' : item.alt}
                    </p>
                  </div>
                  
                  {/* Decorative corner lines */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
          
          <Link href="/archive" className="w-full">
            <Button className="mt-10 w-full md:hidden bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm rounded-none h-14 text-sm font-bold uppercase tracking-widest">
              {t("home.archive.accessFull")}
            </Button>
          </Link>
          
          <div className="mt-12 hidden md:flex justify-center">
            <Link href="/archive">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-12 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] uppercase tracking-widest">
                {t("home.archive.exploreComplete")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Left */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1));
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Image Container */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-none overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={filteredGallery[selectedImageIndex].src} 
                alt={filteredGallery[selectedImageIndex].alt} 
                fill 
                className="object-cover bg-black/50"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <span className="text-[10px] font-bold bg-primary text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block shadow-sm">
                  {language === 'te' ? (filteredGallery[selectedImageIndex].tag === 'Public Address' ? 'బహిరంగ సభ' : filteredGallery[selectedImageIndex].tag === 'Governance' ? 'పరిపాలన' : filteredGallery[selectedImageIndex].tag === 'Education' ? 'విద్య' : filteredGallery[selectedImageIndex].tag === 'Leadership' ? 'నాయకత్వం' : filteredGallery[selectedImageIndex].tag === 'Community' ? 'కమ్యూనిటీ' : filteredGallery[selectedImageIndex].tag === 'Emergency Relief' ? 'అత్యవసర సహాయం' : filteredGallery[selectedImageIndex].tag === 'Public Rally' ? 'బహిరంగ సభ' : filteredGallery[selectedImageIndex].tag === 'Relief Work' ? 'సహాయక చర్యలు' : filteredGallery[selectedImageIndex].tag === 'Infrastructure' ? 'మౌలిక సదుపాయాలు' : filteredGallery[selectedImageIndex].tag === 'Campaign' ? 'ప్రచారం' : filteredGallery[selectedImageIndex].tag === 'Rally' ? 'ర్యాలీ' : filteredGallery[selectedImageIndex].tag === 'Field Visit' ? 'క్షేత్ర పర్యటన' : filteredGallery[selectedImageIndex].tag === 'Health Camp' ? 'వైద్య శిబిరం' : filteredGallery[selectedImageIndex].tag) : filteredGallery[selectedImageIndex].tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {language === 'te' ? 'కార్యక్రమ దృశ్యం' : filteredGallery[selectedImageIndex].alt}
                </h3>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            {/* Mobile swipe hint overlay (invisible but catches touches) */}
            <div 
              className="absolute inset-0 z-[105] md:hidden" 
              onClick={() => setSelectedImageIndex(null)}
              // A real implementation would use a swipe library like react-swipeable or framer-motion drag here
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. CONTACT & GRIEVANCE */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-none border border-white/20 text-white mb-6 md:mb-8"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{t("home.contact.tag")}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 md:mb-8 text-white"
          >
            {t("home.contact.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            {t("home.contact.desc")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-none h-14 px-10 text-sm font-bold shadow-2xl transition-all hover:scale-[1.02] uppercase tracking-widest">
                {t("footer.reportGrievance")}
              </Button>
            </Link>
            <Link href="tel:+919876543210" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full bg-transparent border border-white text-white hover:bg-white/10 rounded-none h-14 px-10 text-sm font-bold shadow-lg uppercase tracking-widest backdrop-blur-sm">
                <Phone className="mr-2 w-4 h-4" /> {language === 'te' ? 'కార్యాలయానికి కాల్ చేయండి' : 'Call the Office'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
