"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Droplet, BookOpen, Utensils, Users, ArrowRight, PlayCircle, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const impactStats = [
  { icon: Droplet, value: "50,000+", label: "Clean Water Access" },
  { icon: Utensils, value: "10,000+", label: "Emergency Meals" },
  { icon: BookOpen, value: "5,000+", label: "Students Supported" },
  { icon: Heart, value: "100+", label: "Medical Camps" }
];

const galleryImages = [
  { src: "/gallery/Social work/GoodSeed_1.jpeg", category: "Community Health", date: "Jan 2026", caption: "Free medical camp in Amalapuram rural area." },
  { src: "/gallery/Social work/GoodSeed_2.jpeg", category: "Education", date: "Dec 2025", caption: "Distribution of school kits to underprivileged children." },
  { src: "/gallery/Social work/GoodSeed_3.jpeg", category: "Relief Work", date: "Nov 2025", caption: "Flood relief material distribution." },
  { src: "/gallery/Social work/GoodSeed_5.jpeg", category: "Infrastructure", date: "Oct 2025", caption: "Inauguration of a new community water plant." },
];

export default function FoundationPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-secondary/20">

      {/* CINEMATIC HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/Social work/GoodSeed_4.jpeg"
            alt="Good Seed Foundation Team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_30%] opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent pointer-events-none md:w-3/4"></div>
          {/* Subtle glowing orb */}
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
          ></motion.div>
        </div>

        <div className="w-full max-w-[1800px] relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2.5 border-l-2 border-secondary shadow-lg hover:bg-white/20 transition-colors"
            >
              <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
                Service to People
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[0.95] drop-shadow-xl">
              Good Seed Foundation.
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed border-l-2 border-secondary/40 pl-6 max-w-3xl drop-shadow-sm"
            >
              We believe that true leadership starts with compassion. Working tirelessly on the ground to uplift families, respond to crises, and plant the seeds for a better tomorrow in Amalapuram.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400">Discover</span>
          <div className="w-px h-12 bg-slate-800 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-secondary"
            />
          </div>
        </motion.div>
      </section>

      {/* PREMIUM IMPACT CARDS */}
      <section className="py-12 md:py-24 relative z-20 bg-white border-y border-slate-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-slate-50 border border-slate-200 p-8 flex flex-col items-start group hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-none shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-secondary transition-all duration-500">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4 tracking-tighter">{stat.value}</h3>
                  <div className="w-8 h-px bg-secondary mb-3 md:mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <section className="py-12 md:py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4 md:mb-6">
              Journey of Service.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Every year, we scale our efforts to reach more families. Our history is defined not by words, but by measurable action on the ground.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-16">
              {[
                { year: "2026", title: "Mega Health & Water Drive", desc: "Launched mobile clinics covering 50 villages and inaugurated large-scale RO water plants across rural Amalapuram." },
                { year: "2025", title: "Flood Relief Operations", desc: "Distributed ration and emergency kits to 2000 affected families within 48 hours of Godavari flooding." },
                { year: "2024", title: "Foundation Established", desc: "Good Seed Foundation officially registered to consolidate social efforts and scale community service." }
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-slate-50 shadow-xl rounded-full my-4 md:my-0">
                    <span className="text-[10px] font-black text-secondary tracking-widest">{event.year}</span>
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4">{event.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / PROOF OF WORK */}
      <section className="py-12 md:py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-px bg-secondary"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Proof of Work
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
                Visual Evidence.
              </h2>
            </div>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="group break-inside-avoid relative rounded-none overflow-hidden bg-slate-50 shadow-md border border-slate-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption} className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                    {img.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 text-white/80 text-[10px] uppercase font-bold tracking-widest mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{img.date}</span>
                  </div>
                  <p className="text-white text-xl md:text-2xl font-bold leading-tight">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
