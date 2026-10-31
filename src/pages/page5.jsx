import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

// `rotate` is in degrees and is applied through framer-motion (not a Tailwind
// class), because framer-motion writes an inline `transform` that would
// otherwise override Tailwind's rotate utilities and flatten the cards.
const contactCards = [
  {
    number: "01",
    title: "Email Me",
    description:
      "Drop a line anytime for backend architecture, full-stack opportunities, or collaborations.",
    linkText: "prajwaladkar279@gmail.com",
    href: "mailto:prajwaladkar279@gmail.com",
    icon: <FaEnvelope />,
    rotate: -2,
    pinColor: "bg-[#E60000]",
  },
  {
    number: "02",
    title: "Direct Call",
    description:
      "Available for professional discussions, technical consultations, and project inquiries.",
    linkText: "Let's Talk",
    href: "tel:+916363435060",
    icon: <FaPhoneAlt />,
    rotate: 1,
    pinColor: "bg-neutral-900",
  },
  {
    number: "03",
    title: "LinkedIn",
    description:
      "Connect with my professional network, career updates, and background milestones.",
    linkText: "View Profile",
    href: "https://www.linkedin.com/in/prajwalkamalaksha/",
    icon: <FaLinkedin />,
    rotate: -1,
    pinColor: "bg-[#E60000]",
  },
  {
    number: "04",
    title: "GitHub",
    description:
      "Explore my source code repositories, full-stack apps, and open-source contributions.",
    linkText: "Explore Repos",
    href: "https://github.com/PrajwalK-dev",
    icon: <FaGithub />,
    rotate: 2,
    pinColor: "bg-neutral-900",
  },
];

export default function ContactSection() {
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

      // Last page: only upward navigation exists
      if (event.deltaY < 0 && isAtTop) {
        hasNavigated.current = true;
        navigate("/projects", { state: { pageDirection: -1 } });
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
      id="contact"
      className="relative isolate min-h-screen w-full flex flex-col justify-center px-4 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white text-neutral-900 overflow-hidden"
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

      <div className="relative z-10 mx-auto w-full max-w-6xl my-auto space-y-10 sm:space-y-12 lg:-translate-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E60000] font-['Plus_Jakarta_Sans',_sans-serif]">
            GET IN TOUCH
          </p>
          <h2 className="font-['Plus_Jakarta_Sans',_sans-serif] text-[clamp(1.75rem,7vw,3rem)] sm:text-5xl font-black uppercase tracking-tighter leading-tight text-neutral-900 mb-4">
            LET&apos;S BUILD <span className="text-[#E60000]">TOGETHER.</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-['Plus_Jakarta_Sans',_sans-serif] leading-relaxed font-medium">
            Have a project in mind, an opportunity, or just want to connect?
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Pinned Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6">
          {contactCards.map((card, idx) => {
            const isExternal = card.href.startsWith("http");
            return (
              <motion.a
                key={card.title}
                href={card.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20, rotate: card.rotate }
                }
                whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -8, scale: 1.03, rotate: 0 }
                }
                className="group relative flex min-w-0 flex-col justify-between p-5 sm:p-6 bg-neutral-50/90 rounded-2xl border border-neutral-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(230,0,0,0.12)] hover:border-[#E60000]/50 transition-[box-shadow,border-color] duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000]"
              >
                {/* Push Pin Graphic */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-md z-20 flex items-center justify-center"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${card.pinColor} shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] border border-white/20`}
                  />
                </div>

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['JetBrains_Mono',_monospace] text-xs font-extrabold text-[#E60000]">
                      {card.number}
                    </span>
                    <div
                      aria-hidden="true"
                      className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#E60000] shadow-sm group-hover:border-[#E60000]/40 transition-colors"
                    >
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans',_sans-serif] text-lg font-black uppercase tracking-tight text-neutral-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm font-['Plus_Jakarta_Sans',_sans-serif] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between gap-2">
                  <span
                    title={card.linkText}
                    className="font-['JetBrains_Mono',_monospace] text-xs font-bold text-neutral-900 group-hover:text-[#E60000] transition-colors truncate"
                  >
                    {card.linkText}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs text-neutral-400 group-hover:translate-x-1 transition-transform"
                  >
                    &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer Technical Tag */}
        <div className="border-t border-neutral-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-['JetBrains_Mono',_monospace] text-neutral-500">
          <span className="font-bold text-neutral-900">&lt;Prajwal.Contact /&gt;</span>
          <span className="text-neutral-600 font-medium">OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>
    </section>
  );
}