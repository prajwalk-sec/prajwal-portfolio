import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from './components/CustomCursor';

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4"; // Import your new Projects section
import Page5 from "./pages/page5";

const getRouteIndex = (path) => {
  const normalizedPath = path.replace(/\/+$/, "") || "/";
  if (normalizedPath === "/" || normalizedPath === "/page1") return 0;
  if (normalizedPath === "/about" || normalizedPath === "/page2") return 1;
  if (normalizedPath === "/skills" || normalizedPath === "/page3") return 2;
  if (normalizedPath === "/projects" || normalizedPath === "/page4") return 3;
  if (normalizedPath === "/contact" || normalizedPath === "/page5") return 4;
  return 0;
};

const pageMetadata = [
  {
    title: "Prajwal K. | Full-Stack Engineer",
    description:
      "Prajwal K. is a full-stack software engineer building dependable web applications with Python, Django, FastAPI, and React.",
  },
  {
    title: "About | Prajwal K.",
    description:
      "Learn about Prajwal K.'s experience building scalable systems, backend services, and polished web applications.",
  },
  {
    title: "Skills | Prajwal K.",
    description:
      "Explore Prajwal K.'s skills across Python, Django, APIs, React, databases, and infrastructure.",
  },
  {
    title: "Projects | Prajwal K.",
    description:
      "Browse selected full-stack and cybersecurity projects by Prajwal K.",
  },
  {
    title: "Contact | Prajwal K.",
    description:
      "Get in touch with Prajwal K. about software engineering opportunities and collaborations.",
  },
];

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const shouldReduceMotion = useReducedMotion();
  const previousPath = useRef(location.pathname);
  const [popDirection, setPopDirection] = useState(1);
  const pageDirection =
    navigationType === "POP"
      ? popDirection
      : location.state?.pageDirection ?? 1;

  useEffect(() => {
    const { title, description } = pageMetadata[getRouteIndex(location.pathname)];
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [location.pathname]);

  useLayoutEffect(() => {
    previousPath.current = location.pathname;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = window.location.pathname;
      const previousIndex = getRouteIndex(previousPath.current);
      const nextIndex = getRouteIndex(nextPath);

      if (nextIndex !== previousIndex) {
        setPopDirection(nextIndex > previousIndex ? 1 : -1);
      }

      previousPath.current = nextPath;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#F8F9FA] text-neutral-800">
      {/* 1. Render your custom cursor here so it's active across all pages */}
      <CustomCursor />
      
      <Navbar />
      <AnimatePresence mode="wait" custom={pageDirection}>
        <motion.main
          key={location.pathname}
          custom={pageDirection}
          variants={{
            enter: (direction) => ({
              y: shouldReduceMotion ? 0 : direction > 0 ? "-35vh" : "35vh",
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.99,
              filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
            }),
            center: {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            },
            exit: (direction) => ({
              y: shouldReduceMotion ? 0 : direction > 0 ? "35vh" : "-35vh",
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.99,
              filter: shouldReduceMotion ? "blur(0px)" : "blur(12px)",
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: shouldReduceMotion ? 0 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-h-screen will-change-transform"
        >
          <Routes location={location}>
            <Route path="/" element={<Page1 />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/about" element={<Page2 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/skills" element={<Page3 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/projects" element={<Page4 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/contact" element={<Page5 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="*" element={<Page1 />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;