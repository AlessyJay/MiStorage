"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Box, ArrowUpRight, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "107",
    change: "+12%",
    icon: Users,
    color: "from-blue-600/20 to-blue-600/10",
    textColor: "text-blue-400",
  },
  {
    title: "Active Units",
    value: "85",
    change: "+8%",
    icon: Box,
    color: "from-emerald-600/20 to-emerald-600/10",
    textColor: "text-emerald-400",
  },
  {
    title: "Monthly Revenue",
    value: "$40,250",
    change: "+15%",
    icon: TrendingUp,
    color: "from-blue-600/20 to-blue-600/10",
    textColor: "text-blue-400",
  },
  {
    title: "Available Units",
    value: "15",
    change: "-2",
    icon: ArrowUpRight,
    color: "from-orange-600/20 to-orange-600/10",
    textColor: "text-orange-400",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-xl bg-gradient-to-br p-3 ${stat.color}`}
                >
                  <stat.icon className={`size-5 ${stat.textColor}`} />
                </div>
                <span className={`text-sm font-medium ${stat.textColor}`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="mt-1 text-sm text-slate-400">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
