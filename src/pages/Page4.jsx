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
    github: "https://github.com/prajwalk-sec/HomeNest",
    live: "https://homenest-q4ji.onrender.com/",
    codeLabel: "CODE",
    liveLabel: "LIVE DEMO",
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
    codeLabel: "CODE",
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
    codeLabel: "CODE",
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
      aria-labelledby="projects-heading"
      className="relative isolate min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#F7F6F2] px-4 pt-24 pb-16 text-neutral-950 sm:px-12 sm:pt-28 sm:pb-20 lg:px-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Micro-Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23, 23, 23, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 23, 23, 0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl my-auto">
        
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-neutral-300/80 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-['JetBrains_Mono',_monospace] text-xs font-semibold uppercase tracking-[0.22em] text-[#E60000]">
              Portfolio Showcase
            </p>
            <h1 id="projects-heading" className="font-['Syne',_sans-serif] text-4xl font-extrabold uppercase leading-[1.05] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-6xl">
              SELECTED <span className="text-[#E60000]">WORK</span>
            </h1>
          </div>

          <a
            href="https://github.com/PrajwalK-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 font-['Plus_Jakarta_Sans',_sans-serif] text-xs font-bold uppercase tracking-wider text-[#E60000] transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000]"
          >
            <span>GITHUB REPOS</span>
            <span className="text-sm font-normal">↗</span>
          </a>
        </div>

        {/* Filter Category Tabs */}
        <div aria-label="Filter projects" className="mb-6 flex flex-wrap items-center gap-2" role="group">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`min-h-10 rounded-full px-4 py-2 font-['Plus_Jakarta_Sans',_sans-serif] text-xs font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] ${
                activeTab === tab.id
                  ? "bg-neutral-950 text-white shadow-md"
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
              className={`group relative flex h-auto min-h-[300px] min-w-0 flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#E60000] focus-within:ring-offset-2 sm:p-5 ${project.bgTheme}`}
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
                <h3 className="font-['Syne',_sans-serif] text-2xl font-extrabold uppercase leading-tight tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#E60000]">
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
                    className="inline-flex min-h-9 items-center gap-1 rounded px-2 text-[11px] font-bold transition-colors hover:text-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif]"
                  >
                    <FaGithub className="text-xs" /> {project.codeLabel}
                  </a>

                  {project.live !== project.github && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[#E60000] px-3 text-[11px] font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif]"
                    >
                      {project.liveLabel} <FaExternalLinkAlt className="text-[8px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}