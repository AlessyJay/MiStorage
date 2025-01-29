"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Mock data for fees
const fees = [
  {
    id: 1,
    name: "Late Fee",
    amount: 25,
    taxRate: 8.25,
    description: "Fee for late payment",
    created: "2023-01-15",
  },
  {
    id: 2,
    name: "Processing Fee",
    amount: 5,
    taxRate: 0,
    description: "Fee for payment processing",
    created: "2023-02-01",
  },
  {
    id: 3,
    name: "Cleaning Fee",
    amount: 50,
    taxRate: 8.25,
    description: "Fee for unit cleaning",
    created: "2023-03-10",
  },
];

export default function FeesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      className="size-full p-4 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mx-auto size-full">
        <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-slate-800 p-6">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="bg-clip-text text-xl font-bold text-white">
              Manage Fees
            </h1>
            <Link href="/admin/setup/fees/create-fees">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 size-4" />
                Add Fee
              </Button>
            </Link>
          </header>
          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="mt-6 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Fees</CardTitle>
                  <CardDescription className="text-slate-400">
                    These fees can be manually charged to customers individually
                    or as part of a new rental. Automatic late or lien fees can
                    be managed on the Late/Lien settings page.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-slate-700 bg-slate-900 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b border-slate-700 hover:bg-slate-800/50">
                          <TableHead className="text-left text-slate-300">
                            Name
                          </TableHead>
                          <TableHead className="text-left text-slate-300">
                            Amount
                          </TableHead>
                          <TableHead className="text-left text-slate-300">
                            Tax Rate
                          </TableHead>
                          <TableHead className="text-left text-slate-300">
                            Description
                          </TableHead>
                          <TableHead className="text-left text-slate-300">
                            Created
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fees.map((fee, index) => (
                          <TableRow
                            key={fee.id}
                            className={`border-b border-slate-700 transition-colors hover:bg-slate-800/50 ${
                              index === fees.length - 1 ? "border-b-0" : ""
                            }`}
                          >
                            <TableCell className="font-medium text-white">
                              {fee.name}
                            </TableCell>
                            <TableCell className="text-white">
                              ${fee.amount.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-white">
                              {fee.taxRate}%
                            </TableCell>
                            <TableCell className="text-white">
                              {fee.description}
                            </TableCell>
                            <TableCell className="text-white">
                              {fee.created}
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="size-8 p-0"
                                  >
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="size-4 text-white" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="bg-slate-700 text-white"
                                >
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem className="hover:bg-slate-600">
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator className="bg-slate-600" />
                                  <DropdownMenuItem className="text-red-400 hover:bg-slate-600 hover:text-red-400">
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
