"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Book, Code, Layers, Zap, Shield, Terminal, Settings } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "intro", title: "Introduction", icon: Book },
  { id: "quickstart", title: "Quick Start", icon: Zap },
  { id: "routing", title: "Routing Mastery", icon: Code },
  { id: "performance", title: "Loadable Core", icon: Terminal },
  { id: "generators", title: "Generator Core", icon: Settings },
  { id: "architecture", title: "Architecture", icon: Layers },
  { id: "api", title: "API Intelligence", icon: Shield },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-bg-primary-bg text-text-primary-text font-sans selection:bg-text-brand-primary/30">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:text-text-brand-secondary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="h6 uppercase tracking-widest font-bold">Back to Site</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-text-brand-primary text-xl font-bold tracking-tighter">RST</span>
          <span className="text-text-muted-text text-sm font-mono">v2.0.4</span>
        </div>
      </nav>

      <div className="pt-24 pb-20 max-w-[1400px] mx-auto px-8 flex gap-12">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 sticky top-32 h-fit space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted-text font-bold mb-6 px-4">Documentation</p>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/5 transition-all text-text-muted-text hover:text-text-primary-text text-left group"
            >
              <s.icon className="w-4 h-4 group-hover:text-text-brand-secondary transition-colors" />
              <span className="text-sm font-medium">{s.title}</span>
            </button>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl space-y-24">
          
          {/* Introduction */}
          <section id="intro" className="scroll-mt-32">
            <h1 className="h1 text-6xl mb-8">RST Framework</h1>
            <p className="p text-xl text-text-secondary-text mb-8">
              A high-fidelity, production-grade framework engineered for technical excellence. 
              RST enforces a strict, token-driven architecture designed to scale seamlessly while maintaining absolute logic isolation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="h3 mb-4 text-text-brand-primary">Logic Isolation</h3>
                <p className="p text-sm text-text-secondary-text leading-relaxed">
                  Strict separation between Containers (logic) and Components (UI). Ensures maintenance velocity and structural purity.
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="h3 mb-4 text-text-brand-secondary">Automated Generation</h3>
                <p className="p text-sm text-text-secondary-text leading-relaxed">
                  Single-source-of-truth routing that automatically constructs your navigation, menus, and breadcrumbs.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="scroll-mt-32">
            <h2 className="h2 mb-8 flex items-center gap-3">
              <Zap className="text-yellow-400 w-8 h-8" /> Quick Start
            </h2>
            <div className="bg-[#03050a] rounded-lg border border-white/10 p-8 font-mono text-sm space-y-4">
              <p className="text-text-muted-text"># Initialize via NPX</p>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary">$</span>
                <span className="text-text-primary-text">npx create-rst@latest my-app</span>
              </div>
              <p className="text-text-muted-text pt-4"># Navigate and Start</p>
              <div className="flex gap-4">
                <span className="text-text-brand-secondary">$</span>
                <span className="text-text-primary-text">cd my-app && npm run dev</span>
              </div>
            </div>
          </section>

          {/* Routing Mastery */}
          <section id="routing" className="scroll-mt-32 space-y-12">
            <div>
              <h2 className="h2 mb-4">Routing Mastery</h2>
              <p className="p text-text-secondary-text mb-8">
                RST uses a generator-driven routing system. You define your domain model in <code className="text-text-brand-secondary">src/routes/</code>, and the framework automatically maps them to the URL, Sidebar, and Breadcrumbs.
              </p>
            </div>

            {/* Case 1 */}
            <GlassCard className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="h3 text-text-brand-primary">Case 01: Basic Sidebar Link</h4>
                <span className="text-[10px] bg-text-brand-primary/10 text-text-brand-primary px-2 py-1 rounded-md uppercase font-bold tracking-widest">Standard</span>
              </div>
              <p className="p text-sm text-text-muted-text">A simple route that appears in the sidebar and navigates to a component.</p>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs">
                <pre className="text-text-secondary-text">
{`{
  icon: <Users />,       // Icon shown in sidebar
  name: "Employees",     // Name shown in sidebar
  path: "employees",     // URL: /admin/employees
  element: <Employees /> // Component to render
}`}
                </pre>
              </div>
            </GlassCard>

            {/* Case 2 */}
            <GlassCard className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="h3 text-text-brand-secondary">Case 02: Nested Layouts (Outlet)</h4>
                <span className="text-[10px] bg-text-brand-secondary/10 text-text-brand-secondary px-2 py-1 rounded-md uppercase font-bold tracking-widest">Hierarchical</span>
              </div>
              <p className="p text-sm text-text-muted-text">Use <code className="text-text-brand-secondary">{"<Outlet />"}</code> to render child routes within a parent layout.</p>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs">
                <pre className="text-text-secondary-text">
{`{
  name: "Overview",
  path: "overview",
  element: <Outlet />, // Renders children here
  children: [
    { index: true, element: <Dashboard /> },
    { name: "Analytics", path: "analytics", element: <Analytics /> }
  ]
}`}
                </pre>
              </div>
            </GlassCard>

            {/* Case 3 */}
            <GlassCard className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="h3 text-tertiary">Case 03: Hidden Detail Routes</h4>
                <span className="text-[10px] bg-tertiary/10 text-tertiary px-2 py-1 rounded-md uppercase font-bold tracking-widest">Advanced</span>
              </div>
              <p className="p text-sm text-text-muted-text">Omit the <code className="text-text-brand-secondary">name</code> property to hide a route from the sidebar (e.g., ID-based details).</p>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs">
                <pre className="text-text-secondary-text">
{`{
  path: "employees",
  element: <Outlet />,
  children: [
    { index: true, element: <List /> },
    { path: ":id", element: <Details /> } // Hidden from Sidebar
  ]
}`}
                </pre>
              </div>
            </GlassCard>
            {/* Case 4 */}
            <GlassCard className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="h3 text-text-brand-primary">Case 04: Infinite Recursive Nesting</h4>
                <span className="text-[10px] bg-text-brand-primary/10 text-text-brand-primary px-2 py-1 rounded-md uppercase font-bold tracking-widest">Enterprise</span>
              </div>
              <p className="p text-sm text-text-muted-text">RST supports infinite nesting. Each child can have its own <code className="text-text-brand-secondary">children</code> array, which the Sidebar Generator will render as multi-level dropdowns.</p>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs">
                <pre className="text-text-secondary-text">
{`{
  name: "Level 1",
  path: "l1",
  children: [
    {
      name: "Level 2",
      path: "l2",
      children: [
        { name: "Level 3", path: "l3", element: <DeepPage /> }
      ]
    }
  ]
}`}
                </pre>
              </div>
            </GlassCard>
          </section>

          {/* Performance & Loadable */}
          <section id="performance" className="scroll-mt-32 space-y-8">
            <h2 className="h2 mb-4">Loadable Core (Performance)</h2>
            <p className="p text-text-secondary-text">
              Every page in RST is lazy-loaded by default using the <code className="text-text-brand-secondary">Loadable</code> HOC. This ensures the initial bundle size remains minimal even as the project grows to hundreds of routes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="h4 text-text-primary-text font-bold uppercase tracking-tighter">The HOC Pattern</h4>
                <p className="p text-sm text-text-muted-text leading-relaxed">
                  The Loadable component wraps <code className="text-white">React.lazy()</code> in a <code className="text-white">Suspense</code> boundary. You can pass a custom Skeleton fallback per page to maintain visual stability during transitions.
                </p>
              </div>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs overflow-hidden">
                <pre className="text-text-brand-secondary">
{`// src/utils/Loadable.tsx
const Loadable = (Component, Fallback = PageSkeleton) => (props) => (
  <Suspense fallback={<Fallback />}>
    <Component {...props} />
  </Suspense>
);`}
                </pre>
              </div>
            </div>
          </section>

          {/* Generator Core */}
          <section id="generators" className="scroll-mt-32">
            <h2 className="h2 mb-8">Generator Core</h2>
            <p className="p text-text-secondary-text mb-8">
              RST provides a suite of automated utilities in <code className="text-text-brand-secondary">src/utils/Generator/</code>. 
              These utilities consume your route config to drive the UI dynamically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Routes", desc: "Maps nested configs to React Router v7 objects." },
                { title: "Menus", desc: "Builds recursive sidebar items with active states." },
                { title: "Breadcrumbs", desc: "Flattens tree routes for linear path indicators." },
              ].map((g) => (
                <div key={g.title} className="p-6 border border-white/5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <h4 className="font-bold text-text-primary-text mb-2">{g.title}</h4>
                  <p className="text-xs text-text-muted-text leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="scroll-mt-32">
            <h2 className="h2 mb-8">Architecture Deep-Dive</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-lg bg-text-brand-primary/10 flex items-center justify-center shrink-0 border border-text-brand-primary/20">
                  <Terminal className="text-text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="h3 mb-2">The Container Pattern</h4>
                  <p className="p text-text-secondary-text">
                    Containers are located in <code className="text-text-brand-secondary">src/pages/[Feature]/[Feature].tsx</code>. 
                    They are responsible for data fetching using RTK Query hooks and managing local state.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-lg bg-text-brand-secondary/10 flex items-center justify-center shrink-0 border border-text-brand-secondary/20">
                  <Code className="text-text-brand-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="h3 mb-2">Presentational Isolation</h4>
                  <p className="p text-text-secondary-text">
                    Child components in <code className="text-text-brand-secondary">src/pages/[Feature]/Components/</code> must be stateless. 
                    They receive data through props, making them highly testable and reusable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* API Intelligence */}
          <section id="api" className="scroll-mt-32">
            <h2 className="h2 mb-8 flex items-center gap-3">
              <Shield className="text-text-brand-primary w-8 h-8" /> API Intelligence
            </h2>
            <p className="p text-text-secondary-text mb-8">
              RST integrates RTK Query with automated cache invalidation. Use the <code className="text-text-brand-secondary">providesTags</code> and <code className="text-text-brand-secondary">invalidatesTags</code> 
              properties to ensure your UI is always synchronized with the server.
            </p>
            <GlassCard className="p-8 bg-text-brand-primary/[0.02]">
              <h4 className="h4 mb-4 text-text-primary-text font-bold uppercase tracking-widest text-[10px]">The List Pattern</h4>
              <p className="p text-sm text-text-muted-text mb-6">
                Always provide a <code className="text-white">LIST</code> tag for collection queries. When a mutation occurs, 
                invalidating the LIST tag will trigger an automatic refetch of all components observing that collection.
              </p>
              <div className="bg-[#010205] p-6 rounded-lg border border-white/5 font-mono text-xs">
                <pre className="text-text-brand-primary">
{`// providesTags LIST pattern
providesTags: (result) => 
  result 
    ? [...result.map(({ id }) => ({ type: 'User', id })), { type: 'User', id: 'LIST' }] 
    : [{ type: 'User', id: 'LIST' }]`}
                </pre>
              </div>
            </GlassCard>
          </section>

          {/* About Section */}
          <section className="pt-24 pb-12">
            <div className="p-12 rounded-2xl bg-gradient-to-br from-text-brand-primary/5 via-transparent to-text-brand-secondary/5 border border-white/10 text-center">
              <h2 className="h2 mb-6 text-text-primary-text">Architectural Sovereignty</h2>
              <p className="p text-text-secondary-text max-w-2xl mx-auto leading-relaxed mb-12">
                RST is not just a template; it is a philosophy of **Architectural Sovereignty**. 
                It empowers developers to build complex enterprise applications by providing a rigid structure that paradoxically offers absolute freedom of logic. 
                By isolating state, optimizing rendering paths, and automating the mundane, we allow you to focus on what matters: the user experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[
                  { title: "Zero Boilerplate", desc: "Route configs drive the entire UI system automatically." },
                  { title: "Type Safe", desc: "Strict TypeScript across API, State, and UI boundaries." },
                  { title: "Production Ready", desc: "Pre-configured for security, performance, and scaling." },
                ].map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h5 className="h5 text-text-brand-secondary font-bold uppercase tracking-widest text-[10px]">{item.title}</h5>
                    <p className="p text-xs text-text-muted-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-20 border-t border-white/5 flex justify-between items-center text-text-muted-text text-sm">
            <p>© 2024 RST Framework Core. MIT Licensed.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-text-brand-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-text-brand-primary transition-colors">Support</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
