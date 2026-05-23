"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Droplet, BookOpen, Utensils, Users, ArrowRight, PlayCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const impactStats = [
  { icon: Droplet, value: "50,000+", label: "People given access to clean water" },
  { icon: Utensils, value: "10,000+", label: "Meals served during crises" },
  { icon: BookOpen, value: "5,000+", label: "Students supported with education" },
  { icon: Heart, value: "100+", label: "Free medical camps organized" }
];

const galleryImages = [
  { src: "/social-work/GoodSeed_1.jpeg", category: "Community Health", date: "Jan 2026", caption: "Free medical camp in Amalapuram rural area." },
  { src: "/social-work/GoodSeed_2.jpeg", category: "Education", date: "Dec 2025", caption: "Distribution of school kits to underprivileged children." },
  { src: "/social-work/GoodSeed_3.jpeg", category: "Relief Work", date: "Nov 2025", caption: "Flood relief material distribution." },
  { src: "/social-work/GoodSeed_5.jpeg", category: "Infrastructure", date: "Oct 2025", caption: "Inauguration of a new community water plant." },
];

export default function FoundationPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">

      {/* FOUNDATION HERO */}
      <section className="relative w-full bg-primary pt-24 pb-32 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/social-work/GoodSeed_1.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-white backdrop-blur-sm mb-4">
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-bold tracking-widest uppercase">Service to People</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Good Seed Foundation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              The social heartbeat of KUNCHE RAMANARAO FOR AMALAPURAM.
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We believe that true leadership starts with compassion. Through the Good Seed Foundation, we have been working tirelessly on the ground to uplift families, respond to crises, and plant the seeds for a better tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT CARDS */}
      <section className="py-12 relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i} variants={fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-border flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
                >
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FLAGSHIP INITIATIVES & BEFORE/AFTER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Flagship Work</h2>
            <p className="text-lg text-muted-foreground font-medium">
              We don't just talk about change; we make it visible. Here are some of the critical transformations led by the foundation across Amalapuram.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-foreground">Clean Water for All</h3>
              <p className="text-lg text-muted-foreground">
                Many remote villages struggled with access to safe drinking water. The Good Seed Foundation stepped in to build robust, modern RO water plants that now serve thousands of households daily.
              </p>
              <ul className="space-y-4">
                {[
                  "Identified 15+ water-scarce hamlets.",
                  "Installed commercial-grade purification systems.",
                  "Ensured 24/7 maintenance and community ownership."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-4 bg-primary text-white rounded-full">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border-4 border-white"
            >
              {/* Using a video placeholder based on the provided mp4 */}
              <div className="absolute inset-0 bg-slate-200">
                <Image src="/social-work/GoodSeed_4.jpeg" alt="Water Project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <PlayCircle className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Journey of Service</h2>
          <div className="space-y-12">
            {[
              { year: "2026", title: "Mega Health Drive", desc: "Launched mobile clinics covering 50 villages." },
              { year: "2025", title: "Flood Relief Operations", desc: "Distributed ration and emergency kits to 2000 affected families." },
              { year: "2024", title: "Foundation Established", desc: "Good Seed Foundation officially registered to serve Amalapuram." }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {event.year}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex-1 relative">
                  <div className="absolute top-8 -left-3 w-6 h-6 bg-white border-b border-l border-border transform rotate-45 hidden md:block"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-lg">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC GALLERY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Proof of Work</h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Visual evidence of our commitment to the people. Transparency is our highest priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border border-border/50"
              >
                <Image src={img.src} alt={img.caption} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {img.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-2 text-white/80 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{img.date}</span>
                  </div>
                  <p className="text-white text-lg font-bold leading-tight">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white px-8">
              View All Activities
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
