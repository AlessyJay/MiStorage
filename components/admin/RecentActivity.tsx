"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    message: "New customer registration",
    time: "2 minutes ago",
    type: "success",
  },
  {
    message: "Payment received from John Doe",
    time: "15 minutes ago",
    type: "info",
  },
  {
    message: "Unit A15 maintenance scheduled",
    time: "1 hour ago",
    type: "warning",
  },
  {
    message: "System backup completed",
    time: "2 hours ago",
    type: "success",
  },
];

const typeColors = {
  success: "bg-emerald-500",
  info: "bg-blue-500",
  warning: "bg-orange-500",
};

export function RecentActivity() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Card className="border-slate-800/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center gap-4 rounded-xl bg-slate-800/50 p-3"
            >
              <div
                className={`size-2 rounded-full ${typeColors[activity.type as keyof typeof typeColors]}`}
              />
              <div className="flex-1">
                <p className="text-sm text-slate-200">{activity.message}</p>
                <p className="text-xs text-slate-400">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
