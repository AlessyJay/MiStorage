"use client";

import { motion } from "framer-motion";
import { AdminHeader } from "@/components/admin/Header";
import { StatsCards } from "@/components/admin/StatCards";
import { StorageOverview } from "@/components/admin/StorageOverview";
import { AccountsReceivable } from "@/components/admin/Account";
import { TodoList } from "@/components/admin/TodoList";
import { LatestLogs } from "@/components/admin/LatestLogs";
import { TaskManager } from "@/components/admin/TaskManeger";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AdminDashboard() {
  return (
    <main className="flex-1 overflow-hidden">
      <motion.div
        className="h-full p-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto h-full">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-slate-800 p-8">
            <AdminHeader />
            <div className="mt-8 flex-1 space-y-8 overflow-auto pr-4">
              <StatsCards />
              <div className="w-full">
                <StorageOverview />
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <AccountsReceivable />
                <div className="space-y-8">
                  <TodoList />
                  <LatestLogs />
                </div>
              </div>
              <TaskManager />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
