import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Single source of truth for route order and legacy aliases.
const links = [
  { name: "Home", href: "/", aliases: ["/page1"] },
  { name: "About", href: "/about", aliases: ["/page2"] },
  { name: "Skills", href: "/skills", aliases: ["/page3"] },
  { name: "Projects", href: "/projects", aliases: ["/page4"] },
  { name: "Contact", href: "/contact", aliases: ["/page5"] },
];

// Returns the position of a path in the route order, or -1 if unknown.
const getRouteIndex = (path) =>
  links.findIndex((l) => l.href === path || l.aliases.includes(path));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentIndex = getRouteIndex(location.pathname);

  // Close the mobile menu on any route change (including wheel navigation).
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Slide direction for page transitions: forward (1) or backward (-1).
  const getDirection = (targetIndex) =>
    targetIndex >= Math.max(currentIndex, 0) ? 1 : -1;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 text-neutral-800 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
      >
        {/* Brand Logo with JetBrains Mono */}
        <Link
          to="/"
          state={{ pageDirection: getDirection(0) }}
          aria-label="Prajwal, go to home"
          className="group flex items-center gap-1 rounded-md bg-transparent font-['JetBrains_Mono',_monospace] text-xl font-bold tracking-tight text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E60000] sm:text-2xl"
        >
          <span aria-hidden="true" className="text-[#E60000] transition-transform duration-300 group-hover:scale-110">&lt;</span>
          <span aria-hidden="true">Prajwal</span>
          <span aria-hidden="true" className="text-[#E60000]">.</span>
          <span aria-hidden="true" className="text-[#E60000] transition-transform duration-300 group-hover:scale-110">/&gt;</span>
        </Link>

        {/* Desktop Navigation Pills */}
        <div className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100/80 p-1 md:flex">
          {links.map((link, index) => {
            const isActive = index === currentIndex;

            return (
              <Link
                key={link.name}
                to={link.href}
                state={{ pageDirection: getDirection(index) }}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 font-['Plus_Jakarta_Sans',_sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] ${
                  isActive
                    ? "bg-white text-[#E60000] shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Terminal Badge (Desktop) */}
        <div className="hidden items-center lg:flex">
          <span className="flex items-center gap-2 rounded-full border border-[#E60000]/20 bg-[#E60000]/10 px-3 py-1.5 font-['Fira_Code',_monospace] text-xs font-medium text-[#E60000]">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-[#E60000] motion-reduce:animate-none"
            />
            python_dev.py
          </span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md px-2 text-2xl text-neutral-700 hover:text-[#E60000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E60000] md:hidden"
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link, index) => {
              const isActive = index === currentIndex;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  state={{ pageDirection: getDirection(index) }}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold font-['Plus_Jakarta_Sans',_sans-serif] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E60000] ${
                    isActive
                      ? "bg-red-50 text-[#E60000]"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}