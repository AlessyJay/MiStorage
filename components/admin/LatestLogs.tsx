"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const logs = [
  {
    message: "12 new users registered",
    time: "Just Now",
    type: "success",
  },
  {
    message: "System Shutdown",
    time: "2hr ago",
    type: "warning",
  },
  {
    message: "System Error",
    time: "recently",
    type: "error",
  },
  {
    message: "12 new user registered",
    time: "Just Now",
    type: "success",
  },
  {
    message: "12 new user registered",
    time: "4hr ago",
    type: "success",
  },
];

const typeColors = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

export function LatestLogs() {
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
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <Card className="border-slate-700 bg-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Latest Log</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {logs.map((log, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-between rounded-lg bg-slate-900/50 p-4"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`size-2 rounded-full ${typeColors[log.type as keyof typeof typeColors]}`}
                />
                <span className="text-slate-200">{log.message}</span>
              </div>
              <span className="text-sm text-slate-400">{log.time}</span>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
