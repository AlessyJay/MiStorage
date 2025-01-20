"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <React.Fragment>
      <div className="top-glow fixed inset-x-0 top-0 -z-10 h-[400px]" />
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          opacity: { duration: 0.2 },
        }}
        className={`fixed inset-x-4 top-4 z-50 transition-all duration-300 ${
          isScrolled ? "nav-blur bg-slate-900/80" : "bg-slate-900/50"
        } rounded-full border border-slate-800/50`}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-14 items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500">
                  <span className="text-lg font-bold text-white">M</span>
                </div>
                <span className="gradient-text text-xl font-semibold">
                  MI Storage
                </span>
              </Link>
            </motion.div>

            <div className="hidden items-center space-x-8 md:flex">
              {["Features", "Pricing", "About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="hidden items-center space-x-4 md:flex">
              <Link href="/admin/dashboard">
                <Button className="rounded-full bg-blue-600 px-6 font-medium text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300"
              >
                {isMobileMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="nav-blur mx-4 mt-2 overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/95 md:hidden"
            >
              <div className="space-y-4 p-4">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="space-y-4 pt-4">
                  <Link href="/admin/dashboard">
                    <Button className="w-full rounded-full bg-blue-600 font-medium text-white hover:bg-blue-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </React.Fragment>
  );
}
