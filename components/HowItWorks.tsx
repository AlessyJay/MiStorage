"use client";

import { motion } from "framer-motion";
import { Search, Box, Truck, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Space",
    description:
      "Browse our available units and find the perfect size for your needs.",
  },
  {
    icon: Box,
    title: "Pack Your Items",
    description: "Organize and pack your belongings securely for storage.",
  },
  {
    icon: Truck,
    title: "Move In",
    description:
      "Bring your items to our facility or use our convenient moving services.",
  },
  {
    icon: Key,
    title: "Access Anytime",
    description: "Use your personal access code to visit your unit 24/7.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute right-1/4 top-0 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 size-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block rounded-full bg-blue-500/10 px-6 py-2"
          >
            <span className="font-medium text-blue-400">How It Works</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Simple Steps to
            <span className="gradient-text"> Secure Storage</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Getting started with MI Storage is easy. Follow these simple steps
            to secure your belongings.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-lg bg-slate-800/50 p-6">
                <div className="absolute right-0 top-0 size-20 rounded-bl-full bg-gradient-to-bl from-blue-500/20 to-purple-500/20" />
                <step.icon className="mb-4 size-12 text-blue-500" />
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-1 w-8 -translate-y-1/2 translate-x-1/2 bg-blue-500/30 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
