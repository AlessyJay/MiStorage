"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tasks = [
  {
    title: "Review new tenant application",
    unit: "A15",
    status: "Pending",
  },
  {
    title: "Process monthly payments",
    unit: "Multiple",
    status: "In Progress",
  },
  {
    title: "Schedule unit inspection",
    unit: "B22",
    status: "Completed",
  },
  {
    title: "Update security protocols",
    unit: "All",
    status: "Pending",
  },
];

const statusColors = {
  Pending: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20",
  "In Progress": "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
  Completed: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20",
};

export function TaskList() {
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
        <CardTitle className="text-lg font-medium">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-between rounded-xl bg-slate-800/50 p-3"
            >
              <div>
                <p className="text-sm text-slate-200">{task.title}</p>
                <p className="text-xs text-slate-400">Unit: {task.unit}</p>
              </div>
              <Badge
                variant="secondary"
                className={
                  statusColors[task.status as keyof typeof statusColors]
                }
              >
                {task.status}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
