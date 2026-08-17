import { GitBranchPlus, MessageCircle, TableRowsSplitIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-16 px-12 border-t border-white/5 bg-bg-primary-bg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-[1400px] mx-auto">
        <div className="space-y-3 text-center md:text-left">
          <div className="text-2xl font-bold text-text-primary-text">Basekit</div>
          <p className="p text-text-muted-text text-sm">© 2024 Basekit. Built with passion for the technical elite.</p>
        </div>
        <div className="flex gap-12">
          <a className="text-text-muted-text hover:text-text-brand-primary transition-colors h6 flex items-center gap-2" href="#">
            <GitBranchPlus className="w-4 h-4" /> Github
          </a>
          <a className="text-text-muted-text hover:text-text-brand-primary transition-colors h6 flex items-center gap-2" href="#">
            <TableRowsSplitIcon className="w-4 h-4" /> Twitter
          </a>
          <a className="text-text-muted-text hover:text-text-brand-primary transition-colors h6 flex items-center gap-2" href="#">
            <MessageCircle className="w-4 h-4" /> Discord
          </a>
        </div>
      </div>
    </footer>
  );
};
