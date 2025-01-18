"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Star, Shield } from "lucide-react";

const stats = [
  {
    label: "Happy Customers",
    value: "2,000+",
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Storage Units",
    value: "500+",
    icon: Building2,
    color: "text-purple-500",
  },
  {
    label: "5-Star Reviews",
    value: "1,000+",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    label: "Years of Service",
    value: "15+",
    icon: Shield,
    color: "text-green-500",
  },
];

export function Stats() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="feature-card-hover border-slate-800 bg-slate-900/50">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`size-8 ${stat.color} mx-auto mb-4`} />
                  <div className="mb-2 text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
