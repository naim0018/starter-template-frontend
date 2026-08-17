import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";

export const CliSection = ({ id }: { id?: string }) => {
  return (
    <Section id={id}>
      <div className="text-center mb-16 space-y-4">
        <h2 className="h2 text-text-primary-text">One Command to Rule Your Stack</h2>
        <p className="p text-text-secondary-text md:w-1/2 mx-auto">Deployment readiness in seconds, not hours. The most refined CLI experience in the modern ecosystem.</p>
      </div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Step 1: Initialize */}
        <div className="bg-bg-secondary-bg border border-white/5 rounded-lg overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900/50 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-xs text-text-muted-text font-mono">1. Initialize</div>
            <Star className="w-4 h-4 text-text-muted-text" />
          </div>
          <div className="p-8 font-mono text-sm md:text-base space-y-6 flex-1">
            <div className="flex gap-4">
              <span className="text-text-brand-secondary">➜</span>
              <span className="text-text-primary-text">~</span>
              <span className="text-text-brand-primary">npx create-basekit my-app</span>
            </div>
            <div className="text-text-muted-text space-y-2">
              <div><span className="text-text-brand-secondary">✓</span> Resolving packages...</div>
              <div><span className="text-text-brand-secondary">✓</span> Fetching Basekit CLI...</div>
            </div>
          </div>
        </div>

        {/* Step 2: Framework Selection */}
        <div className="bg-bg-secondary-bg border border-white/5 rounded-lg overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900/50 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-xs text-text-muted-text font-mono">2. Select Framework</div>
            <Star className="w-4 h-4 text-text-muted-text" />
          </div>
          <div className="p-8 font-mono text-sm md:text-base space-y-4 flex-1">
            <div className="text-text-brand-secondary font-medium">? Which framework do you want to use?</div>
            <div className="space-y-2">
              <div className="text-text-primary-text pl-4 opacity-50">  React (Vite)</div>
              <div className="text-text-brand-primary pl-4 border-l-2 border-text-brand-primary bg-text-brand-primary/10 py-1">❯ Next.js (App Router)</div>
            </div>
          </div>
        </div>

        {/* Step 3: Template Selection */}
        <div className="bg-bg-secondary-bg border border-white/5 rounded-lg overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900/50 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-xs text-text-muted-text font-mono">3. Select Template</div>
            <Star className="w-4 h-4 text-text-muted-text" />
          </div>
          <div className="p-8 font-mono text-sm space-y-4 flex-1">
            <div className="text-text-brand-secondary font-medium">? Which version of the template do you want?</div>
            <div className="space-y-1">
              <div className="text-text-brand-primary pl-4 border-l-2 border-text-brand-primary bg-text-brand-primary/10 py-1">❯ Full Template (Public + Admin + User)</div>
              <div className="text-text-primary-text pl-4 opacity-50">  Public + Admin Dashboard</div>
              <div className="text-text-primary-text pl-4 opacity-50">  Admin + User Dashboard</div>
              <div className="text-text-primary-text pl-4 opacity-50">  Public Pages Only</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
