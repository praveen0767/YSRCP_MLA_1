import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col space-y-4">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border border-primary/20">
              <Image src="/logo.jpeg" alt="Logo" fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary leading-tight">KUNCHE RAMANARAO</h3>
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mt-1">FOR AMALAPURAM</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              Off the people, for the people, by the people.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About the Leader</Link></li>
              <li><Link href="/#work" className="hover:text-primary transition-colors">Achievements</Link></li>
              <li><Link href="/foundation" className="hover:text-secondary text-secondary font-bold transition-colors">Good Seed Foundation</Link></li>
              <li><Link href="/#social" className="hover:text-primary transition-colors">Latest Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Participate</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><Link href="/#volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/#grievance" className="hover:text-primary transition-colors">Report an Issue</Link></li>
              <li><Link href="/#transparency" className="hover:text-primary transition-colors">Public Information</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Contact Office</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <span>MLA Office, Main Road, Amalapuram, AP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>office@kuncheramanarao.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} KUNCHE RAMANARAO FOR AMALAPURAM. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
