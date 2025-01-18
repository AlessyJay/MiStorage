"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Clock,
  Key,
  Thermometer,
  CreditCard,
  Users,
  Lock,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "Advanced Security",
    description:
      "24/7 surveillance and modern security systems protect your belongings.",
    icon: ShieldCheck,
    color: "bg-blue-500",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "24/7 Access",
    description: "Access your storage unit any time, day or night.",
    icon: Clock,
    color: "bg-purple-500",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Climate Control",
    description: "Temperature-controlled units to protect sensitive items.",
    icon: Thermometer,
    color: "bg-green-500",
    gradient: "from-green-500/20 to-transparent",
  },
  {
    title: "Digital Access",
    description: "Modern keypad entry system for enhanced security.",
    icon: Key,
    color: "bg-yellow-500",
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    title: "Easy Payments",
    description: "Convenient online payment options available.",
    icon: CreditCard,
    color: "bg-pink-500",
    gradient: "from-pink-500/20 to-transparent",
  },
  {
    title: "Professional Staff",
    description: "Expert team ready to assist with your needs.",
    icon: Users,
    color: "bg-cyan-500",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Insurance Options",
    description: "Additional protection for your valuable items.",
    icon: Lock,
    color: "bg-red-500",
    gradient: "from-red-500/20 to-transparent",
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor your unit's status through our app.",
    icon: Activity,
    color: "bg-indigo-500",
    gradient: "from-indigo-500/20 to-transparent",
  },
];

export function Features() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
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
            <span className="font-medium text-blue-400">Features</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Why Choose
            <span className="gradient-text"> MI Storage?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Experience the perfect blend of security, convenience, and
            professional service with our state-of-the-art storage solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="feature-card-hover overflow-hidden border-slate-800 bg-slate-900/50">
                <CardContent className="relative p-6">
                  <div
                    className={`absolute right-0 top-0 size-32 bg-gradient-to-bl ${feature.gradient} rounded-bl-full bg-black/10`}
                  />
                  <div
                    className={`size-12 ${feature.color} mb-4 flex items-center justify-center rounded-xl`}
                  >
                    <feature.icon
                      className={`size-6 ${feature.color} text-opacity-90`}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
