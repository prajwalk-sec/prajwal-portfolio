import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiTailwindcss, SiPython } from "react-icons/si";
import useSectionNavigation from "../hooks/useSectionNavigation";

const PROJECTS_DATA = [
  {
    id: "homenest",
    title: "HOMENEST",
    category: "Full-Stack Web App",
    year: "2026",
    description: "Django rental property platform enabling property owners to manage real estate listings and tenant requests.",
    bgTheme: "bg-neutral-900 text-white",
    accentColor: "from-[#E60000]/20 to-transparent",
    tech: [
      { name: "Django", icon: <SiDjango className="text-emerald-500 text-[10px]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-[10px]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-[10px]" /> }
    ],
    github: "https://github.com/PrajwalK-dev",
    live: "https://homenest-q4ji.onrender.com/",
    highlight: "Featured"
  },
  {
    id: "threat-intel",
    title: "THREAT INTEL",
    category: "Cybersecurity",
    year: "2026",
    description: "Threat Intelligence Dashboard for monitoring, analyzing, and visualizing security indicators and cyber threats.",
    bgTheme: "bg-neutral-100 text-neutral-900 border border-neutral-200",
    accentColor: "from-red-500/10 to-transparent",
    tech: [
      { name: "Python", icon: <SiPython className="text-yellow-500 text-[10px]" /> },
      { name: "Security", icon: <FaShieldAlt className="text-red-600 text-[10px]" /> }
    ],
    github: "https://github.com/prajwalk-sec/threat-intelligence-dashboard",
    live: "https://github.com/prajwalk-sec/threat-intelligence-dashboard",
    highlight: "Security"
  },
  {
    id: "vuln-scanner",
    title: "VULN SCANNER",
    category: "Cybersecurity",
    year: "2026",
    description: "Cybersecurity Vulnerability Scanner tool designed to identify security flaws and evaluate system vulnerabilities.",
    bgTheme: "bg-neutral-900 text-white",
    accentColor: "from-[#E60000]/30 to-transparent",
    tech: [
      { name: "Python", icon: <SiPython className="text-yellow-400 text-[10px]" /> },
      { name: "Automation", icon: <FaShieldAlt className="text-red-500 text-[10px]" /> }
    ],
    github: "https://github.com/prajwalk-sec/Cybersecurity-Vulnerability-Scanner",
    live: "https://github.com/prajwalk-sec/Cybersecurity-Vulnerability-Scanner",
    highlight: "Tool"
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "Full-Stack Web App", label: "Full-Stack" },
  { id: "Cybersecurity", label: "Cybersecurity" }
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("all");

  useSectionNavigation({
    previousPath: "/skills",
    nextPath: "/contact",
  });

  const filteredProjects = PROJECTS_DATA.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  return (
    <section
      id="projects"
      className="relative isolate min-h-screen w-full flex flex-col justify-center px-4 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white text-neutral-900 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
      `}</style>

      {/* Background Micro-Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl my-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 border-b border-neutral-200 pb-5 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif] mb-1">
              Portfolio Showcase
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-neutral-900 font-['Plus_Jakarta_Sans',_sans-serif] leading-none">
              SELECTED <span className="text-[#E60000]">WORK</span>
            </h2>
          </div>

          <a
            href="https://github.com/PrajwalK-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E60000] hover:text-neutral-900 transition-colors font-['Plus_Jakarta_Sans',_sans-serif]"
          >
            <span>GITHUB REPOS</span>
            <span className="text-sm font-normal">↗</span>
          </a>
        </div>

        {/* Filter Category Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 font-['Plus_Jakarta_Sans',_sans-serif] ${
                activeTab === tab.id
                  ? "bg-[#E60000] text-white shadow-[0_4px_12px_rgba(230,0,0,0.25)]"
                  : "bg-neutral-100 text-neutral-600 border border-neutral-200 hover:bg-red-50 hover:text-[#E60000]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Editorial Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
              }}
              className={`group relative min-h-[300px] h-auto min-w-0 rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${project.bgTheme}`}
            >
              {/* Top Accent Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-40 transition-opacity duration-300 group-hover:opacity-70`}
              />

              {/* Red Corner Accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#E60000] rotate-45 transform transition-transform duration-500 group-hover:scale-110 opacity-80" />

              {/* Top Meta Details */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest font-['JetBrains_Mono',_monospace] opacity-75">
                  {project.category}
                </span>
                <span className="text-[10px] font-bold font-['JetBrains_Mono',_monospace] opacity-60">
                  {project.year}
                </span>
              </div>

              {/* Compact Center Title & Description */}
              <div className="relative z-10 my-auto">
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight font-['Plus_Jakarta_Sans',_sans-serif] group-hover:text-[#E60000] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs font-medium line-clamp-3 opacity-80 font-['Plus_Jakarta_Sans',_sans-serif] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & Links */}
              <div className="relative z-10 pt-3 border-t border-current/10 flex flex-col gap-2.5">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md border border-current/10 px-2 py-0.5 rounded text-[10px] font-semibold font-['JetBrains_Mono',_monospace]"
                    >
                      {t.icon}
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-0.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold hover:text-[#E60000] transition-colors font-['Plus_Jakarta_Sans',_sans-serif]"
                  >
                    <FaGithub className="text-xs" /> CODE
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded bg-[#E60000] text-white hover:bg-red-700 transition-colors font-['Plus_Jakarta_Sans',_sans-serif]"
                  >
                    DEMO <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}