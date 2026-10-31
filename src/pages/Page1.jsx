import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  // Starts locked so trackpad inertia from a previous page can't trigger
  // an immediate navigation. Unlocks after a short delay.
  const hasNavigatedToAbout = useRef(true);

  useEffect(() => {
    // Use wheel navigation only on desktop devices.
    const isDesktop = window.matchMedia("(min-width: 1024px)");
    if (!isDesktop.matches || shouldReduceMotion) return;

    const unlockTimer = setTimeout(() => {
      hasNavigatedToAbout.current = false;
    }, 700);

    const handleWheel = (event) => {
      if (
        event.deltaY > 24 &&
        window.scrollY < 80 &&
        !hasNavigatedToAbout.current
      ) {
        hasNavigatedToAbout.current = true;
        navigate("/about", { state: { pageDirection: 1 } });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      clearTimeout(unlockTimer);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [navigate, shouldReduceMotion]);

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-white text-neutral-900
      -mt-16 pt-24 pb-8 sm:-mt-20 sm:pt-28 sm:pb-12
      lg:min-h-screen lg:pt-24 lg:pb-10"
    >
      {/* Background Micro-Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(28px, 4vw, 60px) clamp(28px, 4vw, 60px)",
        }}
      />

      <div
        className="relative z-10 mx-auto grid w-full max-w-7xl
        grid-cols-1 items-center gap-8 px-5
        sm:gap-10 sm:px-8 md:px-10
        lg:grid-cols-12 lg:gap-8 lg:px-12 xl:px-16"
      >
        {/* Left: Headline and Bio */}
        <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif]
              text-[clamp(2.7rem,8vw,7rem)]
              font-black uppercase leading-[0.92]
              tracking-[-0.065em] text-neutral-900
              sm:text-7xl lg:text-8xl xl:text-9xl"
            >
              HEY, I&apos;M
              <br />
              <span className="text-[#E60000]">PRAJWAL</span>{" "}
              <span aria-hidden="true" className="inline-block text-[#E60000]">
                *
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mt-5 space-y-3 sm:mt-8">
              <p
                className="font-['Plus_Jakarta_Sans',sans-serif]
                text-base font-semibold uppercase leading-snug
                tracking-tight text-neutral-800
                sm:text-2xl lg:text-xl xl:text-2xl"
              >
                I build robust web applications
                <br className="hidden sm:block" />
                <span className="text-[#E60000]">
                  {" "}
                  that scale and perform.
                </span>
              </p>

              <p
                className="max-w-lg break-words font-['JetBrains_Mono',monospace]
                text-xs leading-6 text-neutral-700
                sm:text-sm sm:leading-7 md:text-base"
              >
                MCA Graduate passionate about backend development and
                full-stack web applications using Python, Django, FastAPI,
                React, and REST APIs.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                to="/projects"
                state={{ pageDirection: 1 }}
                className="group inline-flex min-h-12 items-center justify-center
                gap-2.5 rounded-full bg-[#E60000] px-5 py-3
                font-['Plus_Jakarta_Sans',sans-serif]
                text-xs font-bold text-white
                shadow-[0_10px_25px_rgba(230,0,0,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#CC0000]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#E60000] focus-visible:ring-offset-2
                sm:px-7 sm:text-sm"
              >
                <span
                  aria-hidden="true"
                  className="inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
                VIEW MY WORK
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: Portrait and Red Graphic */}
        <div
          className="relative mx-auto flex h-[340px] w-full
          max-w-[420px] items-end justify-center
          sm:h-[460px] sm:max-w-[500px]
          md:h-[520px]
          lg:col-span-5 lg:h-[min(75vh,650px)]
          lg:max-w-none lg:justify-end"
        >
          {/* Red Backdrop */}
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="absolute bottom-0 right-[5%] z-10
            h-[88%] w-[78%] overflow-hidden rounded-2xl
            bg-[#E60000]
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            sm:right-[8%] sm:w-[75%]
            lg:right-0 lg:w-[88%]"
          />

          {/* Portrait */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="pointer-events-none absolute bottom-0 z-20
            flex h-full w-full items-end justify-center
            lg:justify-center"
          >
            <img
              src="/prajwal-photo.png"
              alt="Portrait of Prajwal"
              fetchPriority="high"
              decoding="async"
              className="block h-full max-h-full w-auto max-w-[115%]
              object-contain object-bottom
              drop-shadow-[0_20px_28px_rgba(0,0,0,0.20)]
              sm:max-w-full lg:max-w-[120%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;