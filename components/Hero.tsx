"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const backgroundImage = "https://images.ui8.net/uploads/8_1697469595507.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 py-32 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-6 py-2 bg-blue-500/10 rounded-full mb-8"
        >
          <span className="text-blue-400 font-medium">
            Next Generation Storage Solutions
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Secure Storage Solutions
          <span className="block gradient-text font-extrabold">
            for Every Need
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform transition-transform group-hover:scale-105" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-700 hover:border-blue-500 text-white hover:text-blue-400 px-8 h-12 text-lg transition-colors"
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
            className="rounded-xl shadow-2xl shadow-blue-500/20 border border-slate-800"
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
