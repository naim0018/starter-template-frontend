import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const Cta = ({ id }: { id?: string }) => {
  return (
    <Section id={id}>
      <GlassCard className="p-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-text-brand-primary/10 via-transparent to-text-brand-secondary/10 -z-10"></div>
        <h2 className="h1 text-5xl md:text-7xl text-text-primary-text mb-12">Ready to Build Your <br /><span className="text-text-brand-secondary">Masterpiece?</span></h2>
        <p className="p text-text-secondary-text text-xl md:w-3/4 mx-auto mb-12">Join thousands of elite developers who have chosen RST as their starting point for the future.</p>
        <div className="flex flex-col items-center gap-8">
          <a href="https://www.npmjs.com/package/create-rst" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="px-16 py-5 h4">
              GET STARTED FOR FREE
            </Button>
          </a>
          <div className="flex items-center gap-3 text-text-muted-text h6">
            <Star className="w-5 h-5 fill-text-muted-text" />
            TRUSTED BY 10,000+ CONTRIBUTORS ON GITHUB
          </div>
        </div>
      </GlassCard>
    </Section>
  );
};
