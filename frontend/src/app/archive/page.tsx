"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar, Camera } from "lucide-react";

const MEDIA_ARCHIVE = [
  { id: 1, src: "/gallery/Delight/D1.jpeg", category: "Events", tag: "Public Address", alt: "Addressing the constituency gathering", span: "col-span-1 md:col-span-2 row-span-2", date: "May 2026", position: "object-left", fit: "object-contain bg-slate-50" },
  { id: 2, src: "/gallery/Par_core_3.jpeg", category: "Public Work", tag: "Governance", alt: "Legislative session and discussions", span: "col-span-1 row-span-1", date: "Apr 2026", position: "object-bottom" },
  { id: 3, src: "/gallery/Social work/GoodSeed_2.jpeg", category: "Social Work", tag: "Education", alt: "School kit distribution", span: "col-span-1 row-span-1", date: "Mar 2026", position: "object-[center_20%]" },
  { id: 4, src: "/gallery/Delight/DH.jpeg", category: "Portraits", tag: "Leadership", alt: "Official portrait of Kunche Ramanarao", span: "col-span-1 row-span-2", date: "Jan 2026", position: "object-[center_10%]" },
  { id: 5, src: "/gallery/Praise_1.jpeg", category: "Public Work", tag: "Community", alt: "Meeting local leaders", span: "col-span-1 row-span-1", date: "Feb 2026", position: "object-[center_15%]", fit: "object-contain bg-slate-900" },
  { id: 6, src: "/gallery/core_1.jpeg", category: "Crisis", tag: "Emergency Relief", alt: "Crisis management and rapid response", span: "col-span-1 md:col-span-2 row-span-1", date: "Nov 2025", position: "object-[center_15%]", fit: "object-contain bg-slate-50" },
  { id: 7, src: "/gallery/Praise_2.jpeg", category: "Events", tag: "Public Rally", alt: "Addressing a large public gathering", span: "col-span-1 row-span-2", date: "Oct 2025", position: "object-center" },
  { id: 8, src: "/gallery/Social work/GoodSeed_3.jpeg", category: "Crisis", tag: "Relief Work", alt: "Flood relief material distribution", span: "col-span-1 row-span-1", date: "Sep 2025", position: "object-[center_15%]", fit: "object-contain bg-slate-50" },
  { id: 9, src: "/gallery/Par_core_1.jpeg", category: "Public Work", tag: "Governance", alt: "Reviewing infrastructure projects", span: "col-span-1 row-span-1", date: "Aug 2025", position: "object-[center_10%]", fit: "object-contain bg-slate-50" },
  { id: 10, src: "/gallery/Social work/GoodSeed_5.jpeg", category: "Social Work", tag: "Infrastructure", alt: "Water plant inauguration", span: "col-span-1 row-span-1", date: "Jul 2025", position: "object-[center_10%]", fit: "object-contain bg-slate-50" },
  { id: 11, src: "/gallery/Delight/D2.jpeg", category: "Events", tag: "Campaign", alt: "Connecting with the youth", span: "col-span-1 md:col-span-2 row-span-2", date: "Jun 2025", position: "object-[center_15%]" },
  { id: 12, src: "/gallery/Delight/D4.jpeg", category: "Events", tag: "Rally", alt: "Leading the constituency rally", span: "col-span-1 row-span-1", date: "May 2025", position: "object-[center_15%]" },
  { id: 13, src: "/gallery/Par_core_2.jpeg", category: "Public Work", tag: "Field Visit", alt: "Inspecting local development sites", span: "col-span-1 row-span-1", date: "Apr 2025", position: "object-[center_15%]" },
  { id: 14, src: "/gallery/Social work/GoodSeed_1.jpeg", category: "Social Work", tag: "Health Camp", alt: "Free medical camp", span: "col-span-1 md:col-span-2 row-span-1", date: "Mar 2025", position: "object-[center_15%]" },
  { id: 15, src: "/gallery/Delight/D5.jpeg", category: "Events", tag: "Campaign", alt: "Felicitation by community leaders", span: "col-span-1 md:col-span-1 row-span-1", date: "Feb 2025", position: "object-[center_20%]" },
  { id: 16, src: "/gallery/Delight/D3.jpeg", category: "Events", tag: "Gathering", alt: "Interacting with local citizens", span: "col-span-1 md:col-span-1 row-span-1", date: "Jan 2025", position: "object-[center_20%]" },
  { id: 17, src: "/gallery/Par_core_4.jpeg", category: "Public Work", tag: "Strategy", alt: "Planning session with party members", span: "col-span-1 md:col-span-1 row-span-1", date: "Dec 2024", position: "object-[center_15%]" },
  { id: 18, src: "/gallery/Social work/GoodSeed_4.jpeg", category: "Social Work", tag: "Welfare", alt: "Good Seed Foundation team at work", span: "col-span-1 md:col-span-2 row-span-1", date: "Nov 2024", position: "object-[center_15%]" }
];

const FILTER_CATEGORIES = ["All", "Public Work", "Social Work", "Crisis", "Events", "Portraits"];

export default function MediaArchivePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredGallery = MEDIA_ARCHIVE.filter(item => 
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-secondary/20">
      
      {/* 1. CINEMATIC ARCHIVE HERO */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/Delight/D1.jpeg"
            alt="Campaign Work Hero"
            fill
            priority
            className="object-cover object-top opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1800px] relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-4"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2.5 border-l-2 border-secondary mx-auto md:mx-0">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
                Official Media System
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95]">
              Work Archive.
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl border-l-2 border-secondary/40 pl-6 mx-auto md:mx-0 text-left">
              The living record of our service. Every photograph is undeniable proof of our commitment to the people of Amalapuram.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL SPOTLIGHTS */}
      <section className="py-12 md:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">Featured Highlights</h2>
            <div className="w-16 h-1 bg-secondary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video md:aspect-[4/3] group overflow-hidden shadow-xl"
            >
              <Image src="/gallery/Praise_2.jpeg" alt="Mass Gathering" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] font-bold bg-primary px-3 py-1 uppercase tracking-widest mb-4 inline-block shadow-sm">Public Rally</span>
                <h3 className="text-3xl font-black leading-tight">Addressing the Heart of Amalapuram</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video md:aspect-[4/3] group overflow-hidden shadow-xl"
            >
              <Image src="/gallery/Par_core_3.jpeg" alt="Legislative Session" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] font-bold bg-primary px-3 py-1 uppercase tracking-widest mb-4 inline-block shadow-sm">Governance</span>
                <h3 className="text-3xl font-black leading-tight">Championing Policy & Development</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL TIMELINE */}
      <section className="py-12 md:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">Campaign Timeline</h2>
            <p className="mt-4 text-slate-600">A chronological record of ground-level impact.</p>
          </div>

          <div className="flex space-x-6 overflow-x-auto pb-12 snap-x hide-scrollbar px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] snap-center bg-white border border-slate-200 shadow-sm group hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square overflow-hidden border-b border-slate-100">
                  <Image src={MEDIA_ARCHIVE[i + 5].src} alt="Timeline" fill className={`${MEDIA_ARCHIVE[i + 5].fit || 'object-cover'} ${MEDIA_ARCHIVE[i + 5].position || 'object-center'} group-hover:scale-105 transition-transform duration-700`} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-slate-900 shadow-sm flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {MEDIA_ARCHIVE[i + 5].date}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-black text-slate-900 mb-2">{MEDIA_ARCHIVE[i + 5].alt}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{MEDIA_ARCHIVE[i + 5].tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL FILTERABLE MASONRY GRID */}
      <section className="py-12 md:py-20 lg:py-32 bg-slate-100 relative overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">
                Complete Media Grid.
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl">
                Filter through our entire archive to see the breadth of our work.
              </p>
            </div>
          </div>

          {/* Filter Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10"
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

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[350px] gap-4">
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
                  className={`relative rounded-xl overflow-hidden group ${item.span} bg-slate-50 shadow-md border border-slate-200 cursor-zoom-in`}
                >
                  <div className="relative w-full h-full">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-contain transition-transform duration-1000 group-hover:scale-105" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                      <span className="inline-block px-2 py-1 bg-slate-900/80 backdrop-blur-md text-[9px] font-black tracking-widest text-white uppercase mb-3 border-l-2 border-primary">
                        {item.category} • {item.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight pr-4">
                        {item.alt}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredGallery.length - 1));
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

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
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <span className="text-[10px] font-bold bg-primary text-white px-3 py-1 uppercase tracking-widest mb-3 inline-block shadow-sm">
                  {filteredGallery[selectedImageIndex].tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {filteredGallery[selectedImageIndex].alt}
                </h3>
              </div>
            </motion.div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev! < filteredGallery.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            <div 
              className="absolute inset-0 z-[105] md:hidden" 
              onClick={() => setSelectedImageIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
