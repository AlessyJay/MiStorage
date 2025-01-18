"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";

export function AdminHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex items-center justify-between"
    >
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Welcome back, Mark
        </h1>
        <p className="text-slate-400">
          Here&apos;s what&apos;s happening with your storage units today.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-slate-400 hover:text-white"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-blue-500" />
        </Button>
        <Button className="gap-2 bg-blue-600 text-white hover:bg-blue-700">
          <Plus className="size-4" />
          Add New Unit
        </Button>
        <Avatar className="size-10 border-2 border-blue-500/20">
          <AvatarImage src="/vercel.svg" />
          <AvatarFallback className="bg-blue-600 text-white">M</AvatarFallback>
        </Avatar>
      </div>
    </motion.div>
  );
}
