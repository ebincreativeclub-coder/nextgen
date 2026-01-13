// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" means top left coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path (URL) changes

  return null;
};

export default ScrollToTop;