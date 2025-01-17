"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute right-1/4 top-0 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 size-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:flex-row md:p-16">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-lg text-xl text-blue-100">
              Secure your belongings with MI Storage today. Our team is ready to
              help you find the perfect storage solution.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-50"
            >
              Reserve Your Unit
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
