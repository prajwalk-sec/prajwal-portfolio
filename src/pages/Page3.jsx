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
      className="relative isolate min-h-screen w-full flex flex-col justify-center px-4 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white text-neutral-900 overflow-hidden"
    >
      {/* Background grid, faded toward the edges so it never competes with content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
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
        style={{ WebkitTextStroke: "1.5px rgba(230, 0, 0, 0.12)" }}
      >
        STACK
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl lg:-translate-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT: heading + intro */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span aria-hidden="true" className="mb-6 block h-1.5 w-14 rounded-full bg-[#E60000]" />

            <h2
              id="skills-heading"
              className={`${SANS} text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.02] text-neutral-900 mb-6`}
            >
              Technical <br />
              <span className="text-[#E60000]">expertise.</span>
            </h2>

            <p
              className={`${SANS} max-w-md text-neutral-600 text-base lg:text-lg leading-relaxed font-medium`}
            >
              Bridging human creativity and machine intelligence. Architecting
              production-ready backend systems, robust APIs, and scalable web
              solutions with rigorous attention to detail.
            </p>
          </motion.div>

          {/* RIGHT: tools grouped by what they do */}
          <div className="lg:col-span-7">
            <div className="border-b border-neutral-200">
              {techGroups.map((group, gIdx) => (
                <motion.div
                  key={group.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: gIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-3 border-t border-neutral-200 py-5"
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
                        className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white py-1.5 pl-1.5 pr-4 transition-colors duration-200 motion-reduce:transition-none hover:border-[var(--brand)] hover:shadow-sm cursor-default"
                        style={{ "--brand": tool.color, "--ink": tool.ink, "--on": tool.on }}
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-lg text-[var(--ink)] transition-colors duration-200 motion-reduce:transition-none group-hover:bg-[var(--brand)] group-hover:text-[var(--on)]"
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