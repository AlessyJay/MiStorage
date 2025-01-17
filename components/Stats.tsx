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
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 feature-card-hover">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
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
