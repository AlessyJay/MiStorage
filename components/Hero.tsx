/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const backgroundImage = "https://images.ui8.net/uploads/8_1697469595507.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute left-0 top-0 size-full">
        <div className="absolute left-1/4 top-20 size-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-block rounded-full bg-blue-500/10 px-6 py-2"
        >
          <span className="font-medium text-blue-400">
            Next Generation Storage Solutions
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Secure Storage Solutions
          <span className="gradient-text block font-extrabold">
            for Every Need
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Experience unparalleled security and convenience with our
          <span className="text-blue-400">
            {" "}
            state-of-the-art facilities
          </span>{" "}
          and exceptional customer service.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="group relative h-12 overflow-hidden bg-blue-600 px-8 text-lg text-white hover:bg-blue-700"
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-transform group-hover:scale-105" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-2 border-slate-700 px-8 text-lg text-black transition-colors hover:border-blue-500 hover:text-blue-400"
          >
            Take a Virtual Tour
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20"
        >
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="rounded-xl border border-slate-800 shadow-2xl shadow-blue-500/20"
          />
        </motion.div>
      </motion.div>

      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-slate-800"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
