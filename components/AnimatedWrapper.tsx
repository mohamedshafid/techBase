"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

export default function AnimatedWrapper({ children }: AnimatedWrapperProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 100, y: 0, duration: 1 }
      );
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
