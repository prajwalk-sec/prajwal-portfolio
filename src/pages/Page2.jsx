import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

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
  const navigate = useNavigate();
  // Starts locked so trackpad inertia from the previous page can't
  // immediately trigger another navigation. Unlocks after a short delay.
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
        navigate("/", { state: { pageDirection: -1 } });
      } else if (event.deltaY > 0 && isAtBottom) {
        hasNavigated.current = true;
        navigate("/skills", { state: { pageDirection: 1 } });
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
      id="about"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Bio */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif]">
              ABOUT ME
            </p>

            <h1 className="font-['Plus_Jakarta_Sans',_sans-serif] text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.02] text-neutral-900 mb-6">
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
          <div className="lg:col-span-3 flex justify-center items-end relative h-[380px] sm:h-[450px] lg:h-[480px]">
            {/* Red Accent Box */}
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 right-4 lg:right-0 w-[78%] h-[88%] bg-[#E60000] rounded-xl z-0 shadow-lg"
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
                      className="h-full bg-[#E60000] rounded-full"
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
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 border-2 border-neutral-900 text-neutral-900 hover:bg-[#E60000] hover:border-[#E60000] hover:text-white transition-all duration-300 font-bold text-xs sm:text-sm uppercase tracking-wider font-['Plus_Jakarta_Sans',_sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000]"
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