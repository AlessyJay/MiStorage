"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const tasks = [
  {
    action: "Move In",
    customer: "Jhon Doe",
    unit: "A5",
    date: "12-02-20",
    status: "Pending",
  },
  {
    action: "Move Out",
    customer: "Jhon Doe",
    unit: "AB15",
    date: "12-02-20",
    status: "Delivered",
  },
  {
    action: "Move In",
    customer: "Jhon Doe",
    unit: "AB",
    date: "12-02-20",
    status: "Waiting For Approval",
  },
  {
    action: "Move In",
    customer: "Jhon Doe",
    unit: "AB6",
    date: "12-02-20",
    status: "Delivered",
  },
  {
    action: "Move Out",
    customer: "Jhon Doe",
    unit: "A15",
    date: "12-02-20",
    status: "Delivered",
  },
  {
    action: "Move In",
    customer: "Jhon Doe",
    unit: "AX6",
    date: "12-02-20",
    status: "Delivered",
  },
];

const statusColors = {
  Pending: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
  Delivered: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  "Waiting For Approval": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
};

export function TaskManager() {
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <Card className="border-slate-700 bg-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Task Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div variants={container} initial="hidden" animate="show">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-400">Action</TableHead>
                <TableHead className="text-slate-400">Customer</TableHead>
                <TableHead className="text-slate-400">Unit</TableHead>
                <TableHead className="text-slate-400">Date</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task, index) => (
                <motion.tr
                  key={index}
                  variants={item}
                  className="border-slate-700"
                >
                  <TableCell className="font-medium text-slate-200">
                    {task.action}
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {task.customer}
                  </TableCell>
                  <TableCell className="text-slate-300">{task.unit}</TableCell>
                  <TableCell className="text-slate-300">{task.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        statusColors[task.status as keyof typeof statusColors]
                      }
                    >
                      {task.status}
                    </Badge>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </CardContent>
    </Card>
  );
}
