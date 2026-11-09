import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import useSectionNavigation from "../hooks/useSectionNavigation";

// `rotate` is in degrees and is applied through framer-motion (not a Tailwind
// class), because framer-motion writes an inline `transform` that would
// otherwise override Tailwind's rotate utilities and flatten the cards.
const contactCards = [
  {
    number: "01",
    title: "Email Me",
    description:
      "For backend roles, full-stack opportunities, and collaborations.",
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
      "For professional inquiries and project discussions.",
    linkText: "Let's Talk",
    href: "tel:+916363435060",
    icon: <FaPhoneAlt />,
    rotate: 1,
    pinColor: "bg-neutral-950",
  },
  {
    number: "03",
    title: "LinkedIn",
    description:
      "Connect for professional updates and career opportunities.",
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
      "Explore my code, full-stack apps, and open-source work.",
    linkText: "Explore Repos",
    href: "https://github.com/prajwalk-sec",
    icon: <FaGithub />,
    rotate: 2,
    pinColor: "bg-neutral-950",
  },
];

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  useSectionNavigation({ previousPath: "/projects" });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#F7F6F2] px-4 pt-24 pb-12 text-neutral-950 sm:px-12 sm:pt-28 sm:pb-14 lg:px-16 lg:pt-32 lg:pb-16"
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

      <div className="relative z-10 mx-auto my-auto w-full max-w-6xl space-y-6 sm:space-y-8 lg:-translate-y-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-['JetBrains_Mono',_monospace] text-xs font-semibold uppercase tracking-[0.22em] text-[#E60000] sm:text-sm">
            GET IN TOUCH
          </p>
          <h1 id="contact-heading" className="mb-4 font-['Syne',_sans-serif] text-[clamp(1.75rem,5.8vw,4.5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.07em] text-neutral-950">
            LET&apos;S BUILD <span className="text-[#E60000]">TOGETHER.</span>
          </h1>
          <p className="font-['Plus_Jakarta_Sans',_sans-serif] text-sm font-medium leading-relaxed text-neutral-600 sm:text-base">
            Have a project in mind, an opportunity, or just want to connect?
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Pinned Sticky Notes Grid */}
        <div className="grid grid-cols-1 gap-5 pt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
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
                className="group relative flex min-h-[230px] min-w-0 flex-col justify-between rounded-2xl border border-neutral-300/80 bg-white/75 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color,background-color] duration-300 hover:border-[#E60000]/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(230,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000] sm:p-6"
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
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-[#E60000]/10 text-[#E60000] shadow-sm transition-colors group-hover:border-[#E60000]/40 group-hover:bg-[#E60000]/15"
                    >
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="mb-2 font-['Syne',_sans-serif] text-lg font-extrabold uppercase tracking-[-0.03em] text-neutral-950">
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
        <div className="flex flex-col items-center justify-between gap-2 border-t border-neutral-300/80 pt-6 font-['JetBrains_Mono',_monospace] text-xs text-neutral-500 sm:flex-row">
          <span className="font-bold text-neutral-900">&lt;Prajwal.Contact /&gt;</span>
          <span className="text-neutral-600 font-medium">OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>
    </section>
  );
}