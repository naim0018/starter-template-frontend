"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Terminal, Settings, Layout, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Initialize",
    desc: "Bootstrap your project with our intelligent CLI. Zero configuration required.",
    icon: Terminal,
    color: "text-text-brand-primary",
  },
  {
    id: "02",
    title: "Configure",
    desc: "Define your domain routes and API endpoints in a central, type-safe schema.",
    icon: Settings,
    color: "text-text-brand-secondary",
  },
  {
    id: "03",
    title: "Construct",
    desc: "Build atomic components using our rigorous logic-isolation patterns.",
    icon: Layout,
    color: "text-tertiary",
  },
  {
    id: "04",
    title: "Deploy",
    desc: "Ship production-ready code with built-in caching and optimized bundles.",
    icon: Rocket,
    color: "text-success",
  },
];

export const Workflow = ({ id }: { id?: string }) => {
  return (
    <Section id={id}>
      <div className="mb-20 text-center">
        <h2 className="h1 text-text-primary-text mb-4">The Development Lifecycle</h2>
        <p className="p text-text-secondary-text md:w-1/2 mx-auto">
          A streamlined, predictable workflow designed to take you from concept to deployment with absolute technical confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-lg overflow-hidden relative z-10 hover:border-white/20 transition-all group"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className={`w-12 h-12 rounded-md bg-white/5 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6" />
              </div>
              <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {step.id}
              </span>
            </div>
            
            <h3 className="h3 text-text-primary-text mb-3">{step.title}</h3>
            <p className="p text-sm text-text-secondary-text">{step.desc}</p>
            
            {/* Active Indicator */}
            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-current ${step.color.replace('text-', 'bg-')}`} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
