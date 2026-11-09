import { motion, useReducedMotion } from "framer-motion";
import useSectionNavigation from "../hooks/useSectionNavigation";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiJavascript,
  SiLinux,
  SiRedis,
  SiNginx,
  SiTypescript,
} from "react-icons/si";

/**
 * Each tool has:
 *  - color: official brand color (used as the hover fill)
 *  - ink:   icon color at rest (darkened for brands that are too pale on white)
 *  - on:    icon color once the tile is filled with the brand color
 */
const techGroups = [
  {
    label: "Backend",
    tools: [
      { icon: <SiDjango />, name: "Django", color: "#092E20", ink: "#092E20", on: "#fff" },
      { icon: <SiFastapi />, name: "FastAPI", color: "#009688", ink: "#009688", on: "#fff" },
      { icon: <SiFlask />, name: "Flask", color: "#111111", ink: "#111111", on: "#fff" },
    ],
  },
  {
    label: "Languages",
    tools: [
      { icon: <SiPython />, name: "Python", color: "#3776AB", ink: "#3776AB", on: "#fff" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E", ink: "#A18F00", on: "#000" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6", ink: "#3178C6", on: "#fff" },
    ],
  },
  {
    label: "Databases",
    tools: [
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1", ink: "#4169E1", on: "#fff" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", ink: "#3D8B3F", on: "#fff" },
      { icon: <SiRedis />, name: "Redis", color: "#DC382D", ink: "#DC382D", on: "#fff" },
    ],
  },
  {
    label: "Frontend",
    tools: [
      { icon: <SiReact />, name: "React", color: "#61DAFB", ink: "#0E8FB8", on: "#000" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4", ink: "#0891B2", on: "#fff" },
    ],
  },
  {
    label: "Infrastructure & workflow",
    tools: [
      { icon: <SiDocker />, name: "Docker", color: "#2496ED", ink: "#2496ED", on: "#fff" },
      { icon: <SiNginx />, name: "Nginx", color: "#009639", ink: "#009639", on: "#fff" },
      { icon: <SiLinux />, name: "Linux", color: "#FCC624", ink: "#1F1F1F", on: "#000" },
      { icon: <SiGit />, name: "Git", color: "#F05032", ink: "#F05032", on: "#fff" },
      { icon: <SiGithub />, name: "GitHub", color: "#181717", ink: "#181717", on: "#fff" },
    ],
  },
];

const SANS = "font-['Plus_Jakarta_Sans',_sans-serif]";

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();
  useSectionNavigation({
    previousPath: "/about",
    nextPath: "/projects",
  });

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#F7F6F2] px-4 pt-24 pb-16 text-neutral-950 sm:px-12 sm:pt-28 sm:pb-20 lg:px-16 lg:pt-32 lg:pb-24"
    >
      {/* Background grid, faded toward the edges so it never competes with content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23, 23, 23, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 23, 23, 0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 55% 50%, #000 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 55% 50%, #000 20%, transparent 100%)",
        }}
      />

      {/* Oversized outline word: one quiet, memorable gesture behind the content */}
      <span
        aria-hidden="true"
        className={`${SANS} pointer-events-none select-none absolute -bottom-6 -left-4 z-0 hidden lg:block text-[15rem] xl:text-[19rem] font-black leading-none tracking-tighter text-transparent`}
        style={{ WebkitTextStroke: "1.5px rgba(230, 0, 0, 0.1)" }}
      >
        STACK
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl lg:-translate-y-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-24 lg:gap-y-16">
          {/* LEFT: heading + intro */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 lg:col-span-5 flex flex-col justify-center"
          >
            <p className="mb-3 font-['JetBrains_Mono',_monospace] text-xs font-semibold uppercase tracking-[0.22em] text-[#E60000] sm:text-sm">
              WHAT I WORK WITH
            </p>

            <h1
              id="skills-heading"
              className="mb-7 font-['Syne',_sans-serif] text-[clamp(1.5rem,9vw,3.75rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-[clamp(2.5rem,3.5vw,3.15rem)]"
            >
              Technical <br />
              <span className="text-[#E60000]">expertise.</span>
            </h1>

            <p
              className={`${SANS} max-w-md text-sm font-medium leading-relaxed text-neutral-600 sm:text-base lg:text-lg`}
            >
              I build dependable web applications with Python and Django, create
              clean REST APIs, and bring them to life with polished React
              interfaces.
            </p>
          </motion.div>

          {/* RIGHT: tools grouped by what they do */}
          <div className="lg:col-span-7 lg:border-l lg:border-neutral-300/80 lg:pl-10">
            <div className="border-b border-neutral-200">
              {techGroups.map((group, gIdx) => (
                <motion.div
                  key={group.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: gIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-neutral-300/80 py-5 sm:grid-cols-[10rem_1fr]"
                >
                  <h3
                    className={`${SANS} text-sm font-bold text-neutral-500 sm:pt-2.5`}
                  >
                    {group.label}
                  </h3>

                  <ul className="flex flex-wrap gap-2.5">
                    {group.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-neutral-300/80 bg-white/70 py-1.5 pl-1.5 pr-4 transition-colors duration-200 hover:border-[var(--brand)] hover:bg-white hover:shadow-sm motion-reduce:transition-none"
                        style={{ "--brand": tool.color, "--ink": tool.ink, "--on": tool.on }}
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E60000]/10 text-lg text-[var(--ink)] transition-colors duration-200 group-hover:bg-[var(--brand)] group-hover:text-[var(--on)] motion-reduce:transition-none"
                        >
                          {tool.icon}
                        </span>
                        <span
                          className="text-[13px] font-['JetBrains_Mono',_monospace] font-semibold tracking-tight text-neutral-800"
                        >
                          {tool.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}