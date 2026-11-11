import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Single source of truth for route order and legacy aliases.
const links = [
  { name: "Home", href: "/", aliases: ["/page1"] },
  { name: "About", href: "/about", aliases: ["/page2"] },
  { name: "Skills", href: "/skills", aliases: ["/page3"] },
  { name: "Projects", href: "/projects", aliases: ["/page4"] },
  { name: "Contact", href: "/contact", aliases: ["/page5"] },
];

// Normalize legacy and trailing-slash paths to the displayed route.
const getRouteIndex = (path) => {
  const normalizedPath = path.replace(/\/+$/, "") || "/";
  const index = links.findIndex(
    (link) =>
      link.href === normalizedPath ||
      link.aliases.includes(normalizedPath)
  );

  // Unknown paths render the home page through App's catch-all route.
  return index === -1 ? 0 : index;
};

export default function Navbar() {
  const location = useLocation();
  const [openPath, setOpenPath] = useState(null);
  const menuOpen = openPath === location.pathname;
  const shouldReduceMotion = useReducedMotion();

  const currentIndex = getRouteIndex(location.pathname);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Slide direction for page transitions: forward (1) or backward (-1).
  const getDirection = (targetIndex) =>
    targetIndex >= Math.max(currentIndex, 0) ? 1 : -1;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 text-neutral-800 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="navbar-inner mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-2xl border border-neutral-200/80 bg-[#F7F6F2]/95 px-3 py-2 shadow-sm shadow-neutral-900/5 backdrop-blur-sm sm:px-4"
      >
        <Link
          to="/"
          state={{ pageDirection: getDirection(0) }}
          aria-label="Prajwal, go to home"
          className="group flex items-center rounded-md bg-transparent font-['Allura',_cursive] text-3xl font-normal leading-none text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000] sm:text-4xl"
        >
          <span aria-hidden="true">Prajwal</span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 rounded-full bg-neutral-100/80 p-1 md:flex">
          {links.map((link, index) => {
            const isActive = index === currentIndex;

            return (
              <Link
                key={link.name}
                to={link.href}
                state={{ pageDirection: getDirection(index) }}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 font-['Plus_Jakarta_Sans',_sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] ${
                  isActive
                    ? "bg-white text-[#E60000] shadow-sm"
                    : "text-neutral-600 hover:bg-white/70 hover:text-neutral-950"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() =>
            setOpenPath((path) =>
              path === location.pathname ? null : location.pathname
            )
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
                ease: "easeInOut",
              }}
              className="basis-full overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-neutral-200/80 py-2">
                {links.map((link, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      state={{ pageDirection: getDirection(index) }}
                      onClick={() => setOpenPath(null)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold font-['Plus_Jakarta_Sans',_sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] ${
                        isActive
                          ? "bg-red-50 text-[#E60000]"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}