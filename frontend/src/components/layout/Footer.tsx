"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-[6px] border-primary relative overflow-hidden">
      {/* Colorful Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen"></div>
      </div>
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-none border-2 border-slate-800 bg-slate-900 shadow-sm shadow-primary/20">
                <Image src="/gallery/logo_main.jpeg" alt="Logo" fill sizes="56px" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none tracking-tighter uppercase">{t("nav.title")}</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mt-1">{t("nav.subtitle")}</span>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-400 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Link href="https://www.facebook.com/kunchevenkataramanarao" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#1877F2]/30 bg-[#1877F2]/10 backdrop-blur-sm shadow-sm hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all duration-300">
                <svg className="w-5 h-5 text-[#1877F2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/kuncheramanaraoofficial?igsh=MTB3N2xvb3g1bDBuNw==" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#E1306C]/30 bg-[#E1306C]/10 backdrop-blur-sm shadow-sm hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_15px_rgba(225,48,108,0.5)] transition-all duration-300">
                <svg className="w-5 h-5 text-[#E1306C] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/results?search_query=kunche+ramana+rao" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#FF0000]/30 bg-[#FF0000]/10 backdrop-blur-sm shadow-sm hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300">
                <svg className="w-5 h-5 text-[#FF0000] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:pl-16">
            <div>
              <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-[0.2em] border-b border-slate-800 pb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/#about" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("nav.about")}</Link></li>
                <li><Link href="/#work" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("nav.publicWork")}</Link></li>
                <li><Link href="/foundation" className="hover:text-secondary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" /> {t("nav.foundation")}</Link></li>
                <li><Link href="/archive" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("nav.mediaArchive")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-[0.2em] border-b border-slate-800 pb-4">{t("footer.civicAction")}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/#contact" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("footer.reportGrievance")}</Link></li>
                <li><Link href="#" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("footer.volunteerProgram")}</Link></li>
                <li><Link href="#" className="hover:text-primary flex items-center group transition-colors"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> {t("footer.pressMedia")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-white mb-6 uppercase tracking-[0.2em] border-b border-slate-800 pb-4">{t("footer.contact")}</h4>
              <ul className="space-y-5 text-sm font-medium text-slate-400">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1877F2]" />
                  </div>
                  <span className="leading-snug pt-1">Suneetha వీళ్ళ, ప్లాట్ నెంబర్. 20, <br/>janupalli, Amalapuram, 533201,<br/>Dr B R Ambathkar Konaseema Dist<br/>Sunitha villa</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="pt-1">+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#EA4335]/10 border border-[#EA4335]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#EA4335]" />
                  </div>
                  <span className="pt-1">office@kuncheramanarao.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {t("nav.title")} {t("nav.subtitle")}. {t("footer.rights")}
          </p>
          <div className="flex space-x-6 text-xs text-slate-500 font-medium">
            <Link href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
