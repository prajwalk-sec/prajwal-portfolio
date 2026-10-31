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
  if (path === "/" || path === "/page1") return 0;
  if (path === "/about" || path === "/page2") return 1;
  if (path === "/skills" || path === "/page3") return 2;
  if (path === "/projects" || path === "/page4") return 3;
  if (path === "/contact" || path === "/page5") return 4;
  return 0;
};

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

  useLayoutEffect(() => {
    previousPath.current = location.pathname;
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
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-800">
      {/* 1. Render your custom cursor here so it's active across all pages */}
      <CustomCursor />
      
      <Navbar />
      <AnimatePresence mode="wait" custom={pageDirection}>
        <motion.main
          key={location.pathname}
          custom={pageDirection}
          variants={{
            enter: (direction) => ({
              y: shouldReduceMotion ? 0 : direction > 0 ? "2.5rem" : "-2.5rem",
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.985,
              filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
            }),
            center: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: (direction) => ({
              y: shouldReduceMotion ? 0 : direction > 0 ? "-2.5rem" : "2.5rem",
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.985,
              filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-h-screen"
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