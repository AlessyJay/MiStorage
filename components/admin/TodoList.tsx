"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Clock, Calendar, CheckCircle } from "lucide-react";

const todos = [
  {
    title: "Active Tasks",
    count: 9,
    icon: ClipboardList,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    title: "Due Tasks",
    count: 48,
    icon: Clock,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    title: "Upcoming Tasks",
    count: 88,
    icon: Calendar,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Completed Tasks",
    count: 92,
    icon: CheckCircle,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

export function TodoList() {
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
        <CardTitle className="text-white">To Do&apos;s</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {todos.map((todo) => (
            <motion.div
              key={todo.title}
              variants={item}
              className="flex items-center justify-between rounded-lg bg-slate-900/50 p-4"
            >
              <div className="flex items-center space-x-4">
                <div className={`${todo.bgColor} rounded-lg p-2`}>
                  <todo.icon className={`size-5 ${todo.color}`} />
                </div>
                <span className="font-medium text-slate-200">{todo.title}</span>
              </div>
              <span className={`${todo.color} font-bold`}>{todo.count}</span>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
