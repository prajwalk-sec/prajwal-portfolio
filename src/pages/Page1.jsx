import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import useSectionNavigation from "../hooks/useSectionNavigation";

const headlineVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.13,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Page1() {
  const shouldReduceMotion = useReducedMotion();
  useSectionNavigation({ nextPath: "/about" });

  return (
    <section
      aria-labelledby="home-heading"
      className="relative isolate min-h-screen overflow-hidden bg-[#F7F6F2] text-neutral-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23, 23, 23, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 23, 23, 0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-24 -z-10 h-96 w-96 rounded-full bg-[#E60000]/10 blur-3xl"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12 lg:pt-24">
        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative z-10 lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div
                variants={lineVariants}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/70 px-3.5 py-2 font-['JetBrains_Mono',_monospace] text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-700 shadow-sm sm:text-xs"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </motion.div>

              <motion.p
                variants={lineVariants}
                className="mb-3 font-['JetBrains_Mono',_monospace] text-xs font-semibold uppercase tracking-[0.22em] text-[#E60000] sm:text-sm"
              >
                Hello, I&apos;m Prajwal K.
              </motion.p>

              <motion.h1
                variants={headlineVariants}
                id="home-heading"
                className="font-['Syne',_sans-serif] text-[clamp(1.4rem,7vw,2rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.075em] text-neutral-950 md:text-5xl lg:text-[clamp(2.5rem,3.8vw,3.5rem)]"
              >
                <motion.span variants={lineVariants} className="block">
                  Building
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                  bold web
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                  experiences
                  <span className="text-[#E60000]">.</span>
                </motion.span>
              </motion.h1>

              <motion.div
                variants={lineVariants}
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-['Plus_Jakarta_Sans',_sans-serif] text-sm font-bold text-neutral-800 sm:mt-7 sm:text-base"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles aria-hidden="true" className="h-4 w-4 text-[#E60000]" />
                  Python Developer
                </span>
                <span aria-hidden="true" className="text-neutral-300">/</span>
                <span>Full-Stack Engineer</span>
              </motion.div>

              <motion.p
                variants={lineVariants}
                className="mt-4 max-w-xl font-['Plus_Jakarta_Sans',_sans-serif] text-sm leading-7 text-neutral-600 sm:mt-5 sm:text-base"
              >
                I turn complex ideas into reliable, thoughtful web products —
                from scalable Python backends and APIs to polished React
                experiences.
              </motion.p>

              <motion.div
                variants={lineVariants}
                className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
              >
                <Link
                  to="/about"
                  state={{ pageDirection: 1 }}
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 font-['Plus_Jakarta_Sans',_sans-serif] text-sm font-bold text-white shadow-lg shadow-neutral-950/10 transition duration-300 hover:-translate-y-1 hover:bg-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000]"
                >
                  More about me
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  to="/projects"
                  state={{ pageDirection: 1 }}
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-3 font-['Plus_Jakarta_Sans',_sans-serif] text-sm font-bold text-neutral-700 transition-colors hover:text-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000]"
                >
                  Explore my work
                  <ArrowDownRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex w-full max-w-[390px] items-end justify-center self-center lg:col-span-5 lg:mt-8 lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-3 h-[78%] w-[78%] rounded-[2rem] bg-[#E8C6C1] sm:right-6 md:right-0"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[78%] w-[78%] rounded-[2rem] border-2 border-neutral-950"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-8 z-20 hidden rounded-xl border border-neutral-900/10 bg-white/90 px-4 py-3 font-['JetBrains_Mono',_monospace] text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-600 shadow-lg backdrop-blur sm:right-1 sm:top-12 lg:block"
            >
              <span className="mb-1 block text-[#E60000]">01 / 05</span>
              Developer portfolio
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-0 z-20 -rotate-6 rounded-lg bg-neutral-950 px-4 py-2 font-['JetBrains_Mono',_monospace] text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg sm:bottom-12 sm:left-1"
            >
              Built with curiosity
            </div>
            <img
              src="/prajwal-photo.png"
              alt="Portrait of Prajwal K."
              fetchPriority="high"
              className="relative z-10 max-h-[34vh] w-auto object-contain object-bottom drop-shadow-[0_24px_28px_rgba(0,0,0,0.16)] sm:max-h-[46vh] lg:max-h-[62vh]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-300/80 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="font-['JetBrains_Mono',_monospace] text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:text-xs">
            Based in India <span className="px-2 text-[#E60000]">—</span> Open
            to building great things
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "Django", "FastAPI", "React"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300/80 bg-white/60 px-3 py-1.5 font-['JetBrains_Mono',_monospace] text-[10px] font-semibold text-neutral-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
