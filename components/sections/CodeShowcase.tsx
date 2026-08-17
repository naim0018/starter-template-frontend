"use client";

import React from "react";

const codeSnippets: Record<string, { name: string, code: string }> = {
  "Admin Route": {
    name: "AdminRoutes.tsx",
    code: `export const adminRoutes = [
  {
    group: "Analytics",
    items: [
      { 
        icon: <ChartPie />, 
        name: "Overview", 
        path: "overview", 
        element: <Overview /> 
      },
      { 
        name: "Reports", 
        path: "reports", 
        element: <Reports /> 
      }
    ]
  }
];`
  },
  "Route Generator": {
    name: "RoutesGenerator.tsx",
    code: `export const routesGenerator = (input: RouteGroup[]): RouteObject[] => {
  return input.flatMap((entry) => {
    if ("items" in entry && entry.items) {
      return normalizeRoutes(entry.items);
    }
    return normalizeRoutes([entry as RouteItem]);
  });
};

const normalizeRoutes = (routes: RouteItem[]): RouteObject[] => {
  return routes.map((route) => ({
    element: route.component 
      ? createLazyElement(route.component) 
      : route.element,
    path: route.path,
    index: route.index,
    children: route.children ? normalizeRoutes(route.children) : []
  }));
};`
  },
  "Menu Generator": {
    name: "MenuGenerator.ts",
    code: `export const menuGenerator = (
  routes: RouteGroup[],
  parentPath = ""
): MenuItem[] => {
  return routes.flatMap((route) => {
    if ("items" in route && Array.isArray(route.items)) {
      return route.items
        .map((item) => menuGenerator([item], parentPath))
        .flat();
    }
    
    const routePath = \`\${parentPath}/\${route.path}\`.replace(/\\/+/g, "/");
    return [{
      label: route.name ?? route.label,
      path: routePath,
      icon: route.icon,
      children: route.children ? menuGenerator(route.children, routePath) : []
    }];
  });
};`
  },
  "Breadcrumb Generator": {
    name: "BreadcrumbsGenerator.ts",
    code: `export const flattenRoutes = (routes: any[], base = "") => {
  let map: Record<string, { name: string; icon?: React.ReactNode }> = {};

  routes.forEach((group) => {
    group.items.forEach((item: any) => {
      const fullPath = \`\${base}/\${item.path}\`.replace(/\\/+/g, "/");
      map[fullPath] = { name: item.name, icon: item.icon };

      if (item.children) {
        map = { ...map, ...flattenNested(item.children, fullPath) };
      }
    });
  });

  return map;
};`
  }
};

export const CodeShowcase = () => {
  const [activeTab, setActiveTab] = React.useState("Admin Route");
  
  const currentSnippet = codeSnippets[activeTab] || codeSnippets["Admin Route"];

  return (
    <div className="w-full glass rounded-lg overflow-hidden border border-white/10 flex flex-col md:flex-row h-[600px] scrollbar-hide">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 border-r border-white/10 bg-slate-950/30 flex flex-col p-4 gap-2 overflow-y-auto scrollbar-hide">
        <div className="text-[10px] uppercase tracking-widest text-text-muted-text font-bold mb-2 px-4 pt-2 flex items-center gap-2">
          React Vite
        </div>
        {Object.keys(codeSnippets).map((key) => {
          const isActive = (codeSnippets[activeTab] ? activeTab : "Admin Route") === key;
          return (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all text-left relative group
              ${isActive ? "bg-white/5 text-text-brand-secondary" : "text-text-muted-text hover:text-text-primary-text hover:bg-white/5"}`}
          >
            {isActive && (
              <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-text-brand-secondary rounded-full" />
            )}
            <span className="h6 uppercase tracking-wider text-[10px] font-bold">{key}</span>
          </button>
        )})}
      </div>

      {/* Code Area */}
      <div className="flex-1 bg-[#03050a] p-8 text-left font-mono relative overflow-auto scrollbar-hide">
        <div className="flex justify-between items-center mb-6">
          <span className="text-text-muted-text text-[10px] uppercase tracking-widest">{currentSnippet.name}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>
        <pre className="text-sm text-text-secondary-text leading-relaxed">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
};
