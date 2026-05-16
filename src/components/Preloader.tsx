"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const columns = [0, 1, 2, 3, 4];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-auto"
          exit={{ 
            transition: { 
              when: "afterChildren",
              staggerChildren: 0.1 
            } 
          }}
        >
          {/* Vertical Panels */}
          <div className="absolute inset-0 flex z-0">
            {columns.map((i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ 
                  y: "-100%",
                  transition: { 
                    duration: 1, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: i * 0.1
                  }
                }}
                style={{ width: "20%" }}
                className="h-full bg-brand-white"
              />
            ))}
          </div>

          {/* Evenly spaced vertical grid lines — absolutely positioned for pixel-perfect consistency */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            {[20, 40, 60, 80].map((pct) => (
              <div
                key={pct}
                className="absolute top-0 bottom-0 w-px"
                style={{
                  left: `${pct}%`,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                y: -50,
                transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
              }}
              className="flex flex-col items-center"
            >
              {/* Logo Branding */}
              <div className="mb-12 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-32 h-32 md:w-48 md:h-48"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Musafir Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Progress */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-48 md:w-80 h-[1px] bg-brand-border/30 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-brand-red"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-black/30">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
