"use client";

import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl z-50">
      <div className="flex justify-between items-center h-16 w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tighter text-text-primary-text">Basekit</span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a className="text-text-brand-primary border-b-2 border-bg-brand-primary h6" href="#hero">Platform</a>
          <a className="text-text-muted-text hover:text-text-primary-text transition-colors h6" href="#cli">CLI</a>
          <a className="text-text-muted-text hover:text-text-primary-text transition-colors h6" href="#features">Features</a>
          <a className="text-text-muted-text hover:text-text-primary-text transition-colors h6" href="#workflow">Workflow</a>
          <a className="text-text-muted-text hover:text-text-primary-text transition-colors h6" href="#architecture">Architecture</a>
        </div>
        <div className="flex items-center gap-6">
          <Terminal className="w-5 h-5 text-text-muted-text hover:text-text-primary-text cursor-pointer transition-colors" />
          <a href="https://www.npmjs.com/package/create-basekit" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-6 py-2">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
