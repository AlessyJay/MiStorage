"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Palette } from "lucide-react";
import Link from "next/link";

// Define the types for UnitGroup and UnitStatus
type UnitStatus = "rented" | "available" | "unavailable";
type Unit = {
  id: string;
  name: string;
  status: UnitStatus;
  size: string;
  unitBalance: number;
  customer?: {
    name: string;
    phone: string;
    plan: string;
    totalBalance: number;
  };
};
type UnitGroup = {
  size: string;
  description: string;
  units: Unit[];
};

// Mock data
const unitGroups: UnitGroup[] = [
  {
    size: "Small Storage",
    description: "5' x 5' (25 sq ft)",
    units: Array.from({ length: 12 }, (_, i) => {
      const status = ["rented", "available", "unavailable"][
        Math.floor(Math.random() * 3)
      ] as UnitStatus;
      return {
        id: `S${i + 1}`,
        name: `Unit S${i + 1}`,
        status: status,
        size: "5' x 5'",
        unitBalance: Math.random() * 1000,
        customer:
          status === "rented"
            ? {
                name: "John Doe",
                phone: "(555) 123-4567",
                plan: "Standard",
                totalBalance: Math.random() * 2000,
              }
            : undefined,
      };
    }),
  },
  {
    size: "Medium Storage",
    description: "10' x 10' (100 sq ft)",
    units: Array.from({ length: 8 }, (_, i) => {
      const status = ["rented", "available", "unavailable"][
        Math.floor(Math.random() * 3)
      ] as UnitStatus;
      return {
        id: `M${i + 1}`,
        name: `Unit M${i + 1}`,
        status: status,
        size: "10' x 10'",
        unitBalance: Math.random() * 1000,
        customer:
          status === "rented"
            ? {
                name: "Jane Smith",
                phone: "(555) 987-6543",
                plan: "Premium",
                totalBalance: Math.random() * 2000,
              }
            : undefined,
      };
    }),
  },
  {
    size: "Large Storage",
    description: "10' x 20' (200 sq ft)",
    units: Array.from({ length: 6 }, (_, i) => {
      const status = ["rented", "available", "unavailable"][
        Math.floor(Math.random() * 3)
      ] as UnitStatus;
      return {
        id: `L${i + 1}`,
        name: `Unit L${i + 1}`,
        status: status,
        size: "10' x 20'",
        unitBalance: Math.random() * 1000,
        customer:
          status === "rented"
            ? {
                name: "Bob Johnson",
                phone: "(555) 456-7890",
                plan: "Business",
                totalBalance: Math.random() * 2000,
              }
            : undefined,
      };
    }),
  },
];

export default function UnitsGridView() {
  const getStatusColor = (status: UnitStatus) => {
    switch (status) {
      case "rented":
        return "bg-blue-500/90 hover:bg-blue-500";
      case "available":
        return "bg-green-500/90 hover:bg-green-500";
      case "unavailable":
        return "bg-red-500/90 hover:bg-red-500";
      default:
        return "bg-gray-500/90 hover:bg-gray-500";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const unitAnimation = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="size-full p-4 lg:p-8">
      <div className="mx-auto size-full">
        <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-slate-800 p-6">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="bg-clip-text text-xl font-bold text-white">Units</h1>
            <Link href="/admin/units/grid/colours">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Palette className="mr-2 size-4" />
                Change Unit Status Colours
              </Button>
            </Link>
          </header>
          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="flex-1 rounded-2xl">
            <div className="space-y-8 p-4">
              {unitGroups.map((group) => (
                <Card
                  key={group.size}
                  className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold text-white">
                        {group.size}
                      </h2>
                      <p className="text-sm text-slate-400">
                        {group.description}
                      </p>
                    </div>
                    <motion.div
                      className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                      {group.units.map((unit) => (
                        <HoverCard
                          key={unit.id}
                          openDelay={100}
                          closeDelay={100}
                        >
                          <HoverCardTrigger asChild>
                            <motion.div
                              className={`group relative aspect-square cursor-pointer rounded-lg ${getStatusColor(
                                unit.status,
                              )} z-0 p-2 text-center text-sm font-medium shadow-lg backdrop-blur-sm transition-colors`}
                              variants={unitAnimation}
                              initial="rest"
                              whileHover="hover"
                              animate="rest"
                            >
                              <span className="relative z-10 flex size-full items-center justify-center text-white">
                                {unit.name}
                              </span>
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-white/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                            </motion.div>
                          </HoverCardTrigger>
                          <HoverCardContent
                            className="z-50 w-80 overflow-hidden rounded-xl border-slate-700/50 bg-slate-800/95 p-0 shadow-xl backdrop-blur-sm"
                            align="start"
                            side="right"
                            sideOffset={8}
                          >
                            <motion.div
                              className="p-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-semibold text-white">
                                      Unit
                                    </h4>
                                    <span className="text-sm text-white">
                                      {unit.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-semibold text-white">
                                      Status
                                    </h4>
                                    <span
                                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                        unit.status === "rented"
                                          ? "bg-blue-500/20 text-blue-400"
                                          : unit.status === "available"
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                      }`}
                                    >
                                      {unit.status.charAt(0).toUpperCase() +
                                        unit.status.slice(1)}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-semibold text-white">
                                      Unit Balance
                                    </h4>
                                    <span className="text-sm text-white">
                                      {formatCurrency(unit.unitBalance)}
                                    </span>
                                  </div>
                                </div>

                                {unit.status === "rented" && unit.customer && (
                                  <motion.div
                                    className="space-y-2 rounded-lg bg-slate-700/50 p-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                  >
                                    <h4 className="font-semibold text-white">
                                      Customer
                                    </h4>
                                    <div className="grid gap-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-slate-400">
                                          Name
                                        </span>
                                        <span className="text-white">
                                          {unit.customer.name}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-slate-400">
                                          Phone
                                        </span>
                                        <span className="text-white">
                                          {unit.customer.phone}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-slate-400">
                                          Plan
                                        </span>
                                        <span className="text-white">
                                          {unit.customer.plan}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-slate-400">
                                          Total Balance
                                        </span>
                                        <span className="text-white">
                                          {formatCurrency(
                                            unit.customer.totalBalance,
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
