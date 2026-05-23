"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, HeartHandshake, AlertCircle, MapPin, CheckCircle, Users, Mail, Phone } from "lucide-react";
import Link from "next/link";

// ------------------------------------
// HERO DATA
// ------------------------------------
const HERO_MODES = [
  {
    id: "social",
    title: "SOCIAL WORK",
    subtitle: "Uplifting the Community",
    headline: "Compassion in Action.",
    description: "Driven by the Good Seed Foundation, we actively support the underprivileged, organize health camps, and deliver educational resources across Amalapuram.",
    image: "/gallery/Social work/GoodSeed_1.jpeg",
    icon: HeartHandshake,
    accent: "text-secondary",
    bgAccent: "bg-secondary/10",
    buttonText: "View Foundation",
    buttonLink: "/foundation"
  },
  {
    id: "public",
    title: "PUBLIC WORK",
    subtitle: "Governance & Development",
    headline: "Building Amalapuram.",
    description: "Championing major infrastructure, securing state funds, and representing the voice of the constituency at the highest levels of governance.",
    image: "/logo.png", // Using Moto_logo.png
    icon: ShieldCheck,
    accent: "text-primary",
    bgAccent: "bg-primary/10",
    buttonText: "See Achievements",
    buttonLink: "#work"
  },
  {
    id: "crisis",
    title: "CRISIS WORK",
    subtitle: "Emergency Response",
    headline: "Standing With You.",
    description: "Rapid intervention during floods, health crises, and local emergencies. Our office ensures no citizen faces hardship alone.",
    image: "/gallery/core_1.jpeg",
    icon: AlertCircle,
    accent: "text-red-600",
    bgAccent: "bg-red-600/10",
    buttonText: "Get Assistance",
    buttonLink: "#contact"
  }
];

// ------------------------------------
// GALLERY DATA
// ------------------------------------
const GALLERY_ITEMS = [
  { src: "/gallery/Social work/GoodSeed_2.jpeg", span: "col-span-1 md:col-span-1 row-span-2", tag: "Education", alt: "School kit distribution" },
  { src: "/gallery/Par_core_3.jpeg", span: "col-span-1 md:col-span-2 row-span-1", tag: "Governance", alt: "Legislative session" },
  { src: "/gallery/Praise_1.jpeg", span: "col-span-1 row-span-1", tag: "Community", alt: "Meeting local leaders" },
  { src: "/gallery/Social work/GoodSeed_3.jpeg", span: "col-span-1 row-span-1", tag: "Relief", alt: "Relief operations" },
  { src: "/gallery/Praise_2.jpeg", span: "col-span-1 md:col-span-2 row-span-2", tag: "Public Address", alt: "Addressing large gathering" },
  { src: "/gallery/Social work/GoodSeed_5.jpeg", span: "col-span-1 row-span-1", tag: "Infrastructure", alt: "Water plant inauguration" },
];

export default function Home() {
  const [activeMode, setActiveMode] = useState(0);

  // Auto-cycle hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMode((prev) => (prev + 1) % HERO_MODES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const mode = HERO_MODES[activeMode];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-primary/20">
      
      {/* 1. SWITCHING HERO (Split Editorial Layout) */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0"></div>
        
        <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200 shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold tracking-widest text-foreground uppercase">
                KUNCHE RAMANARAO FOR AMALAPURAM
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${mode.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h2 className={`text-lg md:text-xl font-bold tracking-widest uppercase mb-4 flex items-center gap-3 ${mode.accent}`}>
                  <mode.icon className="w-6 h-6" />
                  {mode.title}
                </h2>
                <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-[1.05] mb-6">
                  {mode.headline}
                </h1>
                <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-10">
                  {mode.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={mode.buttonLink}>
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full h-14 px-8 text-lg font-bold shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                      {mode.buttonText}
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="bg-white border-slate-300 text-foreground hover:bg-slate-50 rounded-full h-14 px-8 text-lg font-bold shadow-sm w-full sm:w-auto">
                      Contact Office
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Switcher Pills */}
            <div className="flex flex-wrap gap-2 pt-8">
              {HERO_MODES.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeMode === idx 
                    ? `bg-white ${m.accent} border-slate-200 shadow-md scale-105` 
                    : "bg-slate-50 text-muted-foreground border-transparent hover:bg-slate-100 hover:text-foreground"
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Perfect Viewing Framed Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${mode.id}`}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-full max-w-[650px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50"
              >
                <div className={`absolute inset-0 ${mode.bgAccent} opacity-30`}></div>
                <Image 
                  src={mode.image} 
                  alt={mode.headline} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain z-10 p-4 drop-shadow-lg" 
                  priority 
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 2. QUICK TRUST CARDS */}
      <section id="about" className="py-16 bg-slate-50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start group hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">People First</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Daily public interactions and an open-door policy at the Amalapuram constituency office.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start group hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-500 text-secondary">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Transparent Action</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Track local development projects, fund allocations, and legislative queries clearly.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start group hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Welfare Support</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Connecting every eligible family to state and central welfare schemes seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOD SEED FOUNDATION DEEP INTEGRATION */}
      <section id="foundation" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <Image src="/gallery/Social work/GoodSeed_4.jpeg" alt="Good Seed Foundation Team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-secondary">
                <p className="text-foreground text-lg font-bold">"Leadership is measured by the lives you touch."</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-5 py-2.5 rounded-full text-secondary font-bold tracking-widest uppercase">
              Core Social Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
              The <span className="text-secondary">Good Seed</span> Foundation.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Community welfare requires constant action. The Good Seed Foundation is the primary service engine for KUNCHE RAMANARAO's humanitarian efforts across Amalapuram.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "Monthly free health & diagnostic camps.",
                "Clean drinking water to remote hamlets.",
                "Emergency flood and disaster relief kits.",
                "Supporting local education resources."
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-base font-bold text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link href="/foundation">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-10 text-lg font-bold shadow-lg transition-transform hover:scale-105">
                  Explore Full Foundation Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PUBLIC & CRISIS WORK SHOWCASE (EDITORIAL CARDS) */}
      <section id="work" className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">A Legacy of Action</h2>
            <p className="text-xl md:text-2xl text-white/70 font-medium">Proof of work across governance, public infrastructure, and emergency situations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Public Work Card */}
            <div className="group relative rounded-[2.5rem] shadow-2xl bg-white border border-slate-200 overflow-hidden flex flex-col h-full">
              <div className="relative w-full aspect-square bg-slate-100 p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src="/gallery/Par_core_2.jpeg" alt="Public Work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain bg-slate-100 transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col flex-1 text-slate-900 bg-white">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Governance</span>
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Elevating Public Infrastructure</h3>
                <p className="text-lg text-slate-600 font-medium mb-8 flex-1">
                  Securing state funds for vital road networks and pressing local issues in the assembly.
                </p>
                <Link href="#contact">
                  <Button variant="outline" className="w-fit border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 rounded-full px-8 h-12 font-bold shadow-sm">
                    Discuss Public Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Crisis Work Card (core_1.jpeg) */}
            <div className="group relative rounded-[2.5rem] shadow-2xl bg-white border border-slate-200 overflow-hidden flex flex-col h-full">
              <div className="relative w-full aspect-square bg-slate-100 p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-600/5"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src="/gallery/core_1.jpeg" alt="Crisis Work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain bg-slate-100 transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col flex-1 text-slate-900 bg-white">
                <span className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4 block">Emergency Response</span>
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Standing Strong in Crisis</h3>
                <p className="text-lg text-slate-600 font-medium mb-8 flex-1">
                  Immediate, coordinated relief during natural disasters and health emergencies.
                </p>
                <Link href="#contact">
                  <Button variant="outline" className="w-fit border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 rounded-full px-8 h-12 font-bold shadow-sm">
                    Request Assistance
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC MASONRY GALLERY WALL */}
      <section id="social" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full font-bold tracking-widest uppercase">
                Visual Archive
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">The Living Campaign</h2>
              <p className="text-xl text-muted-foreground font-medium">A real-time look into our daily connection with the people of Amalapuram. Transparency through evidence.</p>
            </div>
            <Link href="#social">
              <Button className="hidden md:flex bg-primary text-white hover:bg-primary/90 rounded-full h-14 px-10 font-bold shadow-lg">
                View Full Archive
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden group ${item.span} shadow-md border border-slate-200 bg-white p-2`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <span className="text-xs font-bold bg-white text-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block shadow-sm">
                       {item.tag}
                     </span>
                     <p className="text-white font-bold text-xl leading-tight">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="#social" className="w-full">
            <Button className="mt-10 w-full md:hidden bg-primary text-white hover:bg-primary/90 rounded-full h-14 font-bold shadow-lg">
              View Full Archive
            </Button>
          </Link>
        </div>
      </section>

      {/* 6. CONTACT & GRIEVANCE */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-white border-t border-primary/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-5 py-2.5 rounded-full text-white font-bold tracking-widest uppercase mb-8 border border-white/20">
            <Mail className="w-4 h-4" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">We Are Here To Listen.</h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-12">
            Whether you need to report a local issue, request public assistance, or suggest a new development plan for Amalapuram, our doors are always open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-secondary text-white hover:bg-secondary/90 rounded-full h-16 px-10 text-xl font-bold shadow-2xl transition-transform hover:scale-105">
                Report a Grievance
              </Button>
            </Link>
            <Link href="tel:+919876543210" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl font-bold shadow-lg">
                <Phone className="mr-2 w-5 h-5" /> Call the Office
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
