import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center px-4">
        <div className="mr-4 flex w-full justify-between md:justify-start md:w-auto">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary/20">
              <Image src="/logo.jpeg" alt="Logo" fill sizes="48px" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-primary tracking-tight leading-tight">
                KUNCHE RAMANARAO
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-secondary tracking-widest uppercase">
                For Amalapuram
              </span>
            </div>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about" className="transition-colors hover:text-primary text-foreground/70">About</Link>
            <Link href="/#work" className="transition-colors hover:text-primary text-foreground/70">Work</Link>
            <Link href="/foundation" className="transition-colors hover:text-primary text-secondary font-bold">Good Seed Foundation</Link>
            <Link href="/#social" className="transition-colors hover:text-primary text-foreground/70">Updates</Link>
          </nav>
          <nav className="flex items-center space-x-2">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Contact Office
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
