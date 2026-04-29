"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="hero" className="pt-40 pb-20 px-12 w-full">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-text-brand-secondary text-[10px] tracking-widest font-medium uppercase">
            <span className="flex h-2 w-2 rounded-full bg-text-brand-secondary"></span>
            AVAILABLE NOW: V2.0
          </div>
          <h1 className="h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter text-text-primary-text">
            The Blueprint for <br />
            <span className="gradient-text">Enterprise React</span>
          </h1>
          <p className="p text-text-secondary-text text-xl md:w-3/4">
            RST is a high-fidelity React framework engineered for absolute logic isolation,
            automated routing generation, and zero-boilerplate development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
            <a href="https://www.npmjs.com/package/create-rst" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-8 py-4">
                INITIALIZE REPOSITORY
              </Button>
            </a>
            <Link href="/documentation">
              <Button variant="glass" className="px-8 py-4 flex items-center gap-2 group">
                VIEW BLUEPRINTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="glass p-8 rounded-lg shadow-2xl relative z-10 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="font-mono text-sm space-y-3">
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">1</span>
                <span className="text-text-brand-primary">import</span>
                <span className="text-text-primary-text">{"{ Masterpiece }"}</span>
                <span className="text-text-brand-primary">from</span>
                <span className="text-text-brand-secondary">&quot;@rst/core&quot;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">2</span>
                <span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">3</span>
                <span className="text-tertiary">const</span>
                <span className="text-text-primary-text">app =</span>
                <span className="text-text-brand-primary">new</span>
                <span className="text-bg-brand-secondary">Masterpiece({"{ "}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">4</span>
                <span className="pl-6 text-text-muted-text">velocity:</span>
                <span className="text-text-brand-secondary">&quot;unmatched&quot;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">5</span>
                <span className="pl-6 text-text-muted-text">precision:</span>
                <span className="text-text-brand-secondary">&quot;absolute&quot;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary opacity-50">6</span>
                <span className="text-bg-brand-secondary">{"})"}</span>
              </div>
            </div>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-text-brand-primary/20 to-text-brand-secondary/20 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
