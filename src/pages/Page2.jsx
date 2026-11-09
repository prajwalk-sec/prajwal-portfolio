import { motion, useReducedMotion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import useSectionNavigation from "../hooks/useSectionNavigation";

const SKILL_BARS = [
  { name: "BACKEND ENGINEERING", percentage: 95 },
  { name: "PYTHON & DJANGO", percentage: 90 },
  { name: "REST APIs & FASTAPI", percentage: 88 },
  { name: "FRONTEND & REACT", percentage: 82 },
];

// Resume lives in /public. The path is absolute so it works from any route,
// and the spaces are URL-encoded. `download` sets the saved file name.
const RESUME_FILE_NAME = "Prajwal K - Developer Resume.pdf";
const RESUME_HREF = `/${encodeURIComponent(RESUME_FILE_NAME)}`;

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  useSectionNavigation({ previousPath: "/", nextPath: "/skills" });

  return (
    <section
      id="about"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Bio */}
          <div className="min-w-0 lg:col-span-5 flex flex-col justify-center">
            <p className="mb-3 font-['JetBrains_Mono',_monospace] text-xs font-semibold uppercase tracking-[0.22em] text-[#E60000] sm:text-sm">
              ABOUT ME
            </p>

            <h1 className="mb-6 font-['Syne',_sans-serif] text-[clamp(1.25rem,7.2vw,3rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.06em] text-neutral-950 sm:text-[clamp(2rem,4.2vw,3rem)] lg:text-[clamp(1.9rem,3vw,2.7rem)]">
              ENGINEERING SCALABLE SYSTEMS WITH PRECISION &amp; CREATIVITY.
            </h1>

            <p className="text-neutral-600 text-sm sm:text-base font-['Plus_Jakarta_Sans',_sans-serif] leading-relaxed mb-6 font-medium">
              I&apos;m an MCA graduate and full-stack software engineer
              specializing in{" "}
              <span className="font-bold text-neutral-900">
                Python, Django, FastAPI, React, and SQL
              </span>
              . I design and implement robust backend architectures,
              high-performance REST APIs, and clean web applications built to
              scale.
            </p>

            {/* Signature Accent */}
            <div className="mt-2 text-3xl sm:text-4xl text-neutral-900 font-['Caveat',_cursive] tracking-wide">
              Prajwal K.
            </div>
          </div>

          {/* CENTER COLUMN: Portrait Cutout with Red Backdrop */}
          <div className="lg:col-span-3 flex justify-center items-end relative h-[320px] min-w-0 sm:h-[450px] lg:h-[480px]">
            {/* Red Accent Box */}
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 right-4 z-0 h-[88%] w-[78%] max-w-full rounded-xl bg-[#E8C6C1] shadow-lg lg:right-0"
            />
            {/* Portrait Cutout */}
            <img
              src="/prajwal-photo-about.png"
              alt="Portrait of Prajwal"
              decoding="async"
              className="relative z-10 h-full w-auto object-contain object-bottom grayscale contrast-125 drop-shadow-[0_20px_28px_rgba(0,0,0,0.20)]"
            />
          </div>

          {/* RIGHT COLUMN: Skill Progress Bars & Resume Button */}
          <div className="lg:col-span-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-neutral-200/80 pt-8 lg:pt-0 flex flex-col justify-between h-full">
            {/* Skill Bars List */}
            <div className="space-y-6">
              {SKILL_BARS.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold font-['Plus_Jakarta_Sans',_sans-serif] text-neutral-900 tracking-wider">
                    <span id={`skill-${index}`}>{skill.name}</span>
                    <span className="font-['JetBrains_Mono',_monospace] font-semibold text-neutral-700">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div
                    role="progressbar"
                    aria-labelledby={`skill-${index}`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.percentage}
                    className="h-2 w-full bg-neutral-200/80 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-[#E60000]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Action Button */}
            <div className="mt-10 lg:mt-12">
              <a
                href={RESUME_HREF}
                download={RESUME_FILE_NAME}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-8 py-3.5 font-['Plus_Jakarta_Sans',_sans-serif] text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-neutral-950/10 transition duration-300 hover:-translate-y-1 hover:bg-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000] sm:w-auto sm:text-sm"
              >
                <span>DOWNLOAD RESUME</span>
                <FaDownload
                  aria-hidden="true"
                  className="text-xs transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}