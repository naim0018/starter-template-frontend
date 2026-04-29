import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";

export const CliSection = ({ id }: { id?: string }) => {
  return (
    <Section id={id}>
      <div className="text-center mb-16 space-y-4">
        <h2 className="h2 text-text-primary-text">One Command to Rule Your Stack</h2>
        <p className="p text-text-secondary-text md:w-1/2 mx-auto">Deployment readiness in seconds, not hours. The most refined CLI experience in the modern ecosystem.</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full md:basis-2/3 lg:basis-1/2 bg-bg-secondary-bg border border-white/5 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-slate-900/50 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="text-xs text-text-muted-text font-mono">zsh — 80x24</div>
            <Star className="w-4 h-4 text-text-muted-text" />
          </div>
          <div className="p-12 font-mono text-lg md:text-xl">
            <div className="flex gap-4">
              <span className="text-text-brand-secondary">➜</span>
              <span className="text-text-primary-text">~</span>
              <span className="text-text-brand-primary">npx create-rst my-masterpiece</span>
            </div>
            <div className="mt-6 text-text-muted-text">
              <span className="text-text-brand-secondary">✓</span> Resolving dependencies...
            </div>
            <div className="mt-2 text-text-muted-text">
              <span className="text-text-brand-secondary">✓</span> Structuring architectural layers...
            </div>
            <div className="mt-2 text-text-brand-secondary font-medium">
              <span className="text-text-brand-secondary">✓</span> Success! Project created in 0.8s
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
