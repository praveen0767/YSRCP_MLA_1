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

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery = MEDIA_ARCHIVE.filter(item => 
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-primary/20">
      
      {/* 1. CINEMATIC STATIC HERO */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        
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

        <div className="w-full max-w-[1800px] relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-20 md:pb-32 text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-5xl space-y-6 md:space-y-8"
          >
            {/* Identity Strip */}
            <div className="inline-flex items-center justify-center md:justify-start space-x-3 bg-slate-900/60 backdrop-blur-md px-5 py-2.5 border-l-2 border-secondary shadow-sm mx-auto md:mx-0">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
                The Face of Service in Amalapuram
              </span>
            </div>

            {/* Monumental Slogan */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              KUNCHE RAMANARAO <br className="hidden md:block" />
              <span className="text-secondary opacity-95 block mt-2">FOR AMALAPURAM</span>
            </h1>
            
            {/* Supporting Trust Line */}
            <p className="text-lg md:text-3xl text-slate-200 font-medium leading-relaxed max-w-3xl border-l-2 border-secondary/50 pl-6 mx-auto md:mx-0 text-left">
              Social work. Public work. Crisis work. <br className="hidden md:block" />
              A leader with the people, for the people.
            </p>
            
            {/* CTA Zone */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 justify-center md:justify-start">
              <Link href="#work" className="w-full sm:w-auto">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-slate-900 rounded-none h-14 md:h-16 px-10 md:px-12 text-sm md:text-base font-black uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02]">
                  Join The Movement
                </Button>
              </Link>
              <Link href="#social" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full bg-slate-900/50 border-slate-500 text-white hover:bg-slate-900/80 hover:border-slate-400 rounded-none h-14 md:h-16 px-10 md:px-12 text-sm md:text-base font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm transition-all">
                  Explore The Archive
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
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
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
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
                  <span className="text-[10px] font-bold tracking-widest uppercase">Field Presence</span>
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
                  A Life of Dedicated Service
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter"
              >
                Leadership Built on <span className="text-primary relative inline-block">Trust & Action.<span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10"></span></span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-lg text-slate-600 font-light leading-relaxed border-l border-slate-200 pl-6"
              >
                <p>
                  For years, Kunche Ramanarao has been a pillar of unwavering support in Amalapuram. Guided by a deep commitment to the YSRCP's vision of inclusive welfare, his journey is defined by tireless dedication to the community—serving all citizens without discrimination of caste, religion, region, or background.
                </p>
                <p>
                  Believing firmly that one does not need official power to serve meaningfully, he has continuously uplifted the region through extensive social work, disaster relief, and grassroots engagement. His presence is felt wherever help is needed.
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
                  <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">Community Access</span>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-2">Commitment</span>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
                <div className="flex flex-col mt-4 md:mt-0 flex-1">
                  <p className="text-sm font-medium text-slate-500 leading-relaxed italic border-l-2 border-primary pl-4">
                    "With official authority, we will build a stronger, more developed Amalapuram."
                  </p>
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
                  Primary Service Engine
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                The Good Seed Foundation.
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Community welfare requires constant action. The Good Seed Foundation is the primary service engine for humanitarian efforts across Amalapuram, delivering immediate support to those in need.
              </p>
              <Link href="/foundation" className="inline-block">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-12 px-8 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-[1.02]">
                  Explore Foundation Work
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
              <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                <Image src="/gallery/Social work/GoodSeed_1.jpeg" alt="Health Camps" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  Healthcare
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Free Health Camps</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Monthly diagnostic and general health camps providing vital medical access to remote hamlets.
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
              <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                <Image src="/gallery/Par_core_2.jpeg" alt="Governance" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  Governance
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">Infrastructure Development</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Securing state funds for vital road networks and representing pressing local issues in assembly.
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
              <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                <Image src="/gallery/core_1.jpeg" alt="Crisis Relief" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-600 shadow-sm">
                  Emergency
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">Disaster Response</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Rapid intervention during floods and health crises, ensuring immediate relief kits and support.
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
              Live Updates.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Real-time dispatches from the ground. See where we are, what we're building, and who we're meeting every single day.
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
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={post.image} alt={post.category} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
                    {post.content}
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
              Load More Updates
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
                  Media & Updates
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
                The Living Archive.
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
                A real-time look into our daily connection with the people of Amalapuram. Transparency through continuous, undeniable evidence of action.
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
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4">
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
                  className={`relative rounded-none overflow-hidden group ${item.span} bg-white shadow-md border border-slate-200 cursor-zoom-in`}
                >
                <div className="relative w-full h-full">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-bold bg-primary text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block shadow-sm">
                      {item.tag}
                    </span>
                    <p className="text-white font-bold text-xl md:text-2xl leading-tight transition-colors duration-300">
                      {item.alt}
                    </p>
                  </div>
                  
                  {/* Decorative corner lines */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
          
          <Link href="/archive" className="w-full">
            <Button className="mt-10 w-full md:hidden bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm rounded-none h-14 text-sm font-bold uppercase tracking-widest">
              Access Full Archive
            </Button>
          </Link>
          
          <div className="mt-12 hidden md:flex justify-center">
            <Link href="/archive">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-12 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] uppercase tracking-widest">
                Explore The Complete Archive
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
                className="object-contain bg-black/50"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <span className="text-[10px] font-bold bg-primary text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block shadow-sm">
                  {filteredGallery[selectedImageIndex].tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {filteredGallery[selectedImageIndex].alt}
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Connect With Us</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 md:mb-8 text-white"
          >
            We Are Here To Listen.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Whether you need to report a local issue, request public assistance, or suggest a new development plan for Amalapuram, our doors are always open.
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
                Report a Grievance
              </Button>
            </Link>
            <Link href="tel:+919876543210" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full bg-transparent border border-white text-white hover:bg-white/10 rounded-none h-14 px-10 text-sm font-bold shadow-lg uppercase tracking-widest backdrop-blur-sm">
                <Phone className="mr-2 w-4 h-4" /> Call the Office
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
