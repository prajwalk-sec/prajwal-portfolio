import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

// 16 tools mapped with their official brand colors
const techTools = [
  { icon: <SiPython />, name: "Python", color: "#3776AB" },
  { icon: <SiDjango />, name: "Django", color: "#092E20" },
  { icon: <SiFastapi />, name: "FastAPI", color: "#009688" },
  { icon: <SiFlask />, name: "Flask", color: "#111111" },
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiNginx />, name: "Nginx", color: "#009639" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <SiGit />, name: "Git", color: "#F05032" },
  { icon: <SiGithub />, name: "GitHub", color: "#181717" },
  { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
];

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const hasNavigated = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const unlockTimer = setTimeout(() => {
      hasNavigated.current = false;
    }, 700);

    const handleWheel = (event) => {
      if (hasNavigated.current || Math.abs(event.deltaY) <= 24) return;

      const isAtTop = window.scrollY < 80;
      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 24;

      if (event.deltaY < 0 && isAtTop) {
        hasNavigated.current = true;
        navigate("/about", { state: { pageDirection: -1 } });
      } else if (event.deltaY > 0 && isAtBottom) {
        hasNavigated.current = true;
        navigate("/projects", { state: { pageDirection: 1 } });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      clearTimeout(unlockTimer);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [navigate]);

  return (
    <section
      id="skills"
      className="relative isolate min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-24 bg-white text-neutral-900 overflow-hidden"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Editorial Header & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif]">
              TECHNICAL STACK
            </p>

            <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] text-neutral-900 mb-6">
              TECHNICAL <br />
              <span className="text-[#E60000]">EXPERTISE.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base lg:text-lg font-['Plus_Jakarta_Sans',_sans-serif] leading-relaxed font-medium">
              Bridging human creativity and machine intelligence. Architecting
              production-ready backend systems, robust APIs, and scalable web
              solutions with rigorous attention to detail.
            </p>
          </div>

          {/* RIGHT COLUMN: 4-column tech grid */}
          <div className="lg:col-span-7 lg:pl-6 border-t lg:border-t-0 lg:border-l border-neutral-200/80 pt-8 lg:pt-0 flex flex-col justify-center">
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              style={{ perspective: 1000 }}
            >
              {techTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.03 }}
                  className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_30px_-4px_rgba(230,0,0,0.12)] hover:border-[#E60000]/60 transition-all duration-300 cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-b from-neutral-50 to-neutral-100 border border-neutral-200 flex items-center justify-center text-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_3px_6px_rgba(0,0,0,0.05)] group-hover:border-[#E60000]/40 group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_0_15px_rgba(230,0,0,0.25)] group-hover:bg-white transition-all duration-300"
                    style={{
                      transform: "translateZ(18px)",
                      color: tool.color, // Applies the official brand color dynamically
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="flex transition-transform duration-300 group-hover:scale-110"
                    >
                      {tool.icon}
                    </span>
                  </div>

                  <span className="mt-3 text-xs font-['JetBrains_Mono',_monospace] font-bold text-neutral-800 tracking-tight group-hover:text-[#E60000] transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}