"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Plus, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Mock data for tax rates
const taxRates = [
  { id: 1, name: "Standard Rate", rate: 8.25 },
  { id: 2, name: "Reduced Rate", rate: 5.0 },
  { id: 3, name: "Zero Rate", rate: 0.0 },
  { id: 4, name: "Special Rate", rate: 12.5 },
];

export default function TaxRatesPage() {
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
            <div>
              <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent">
                Tax Rates
              </h1>
            </div>
            <Link href="/admin/setup/tax/create-tax">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 size-4" /> New Tax Rate
              </Button>
            </Link>
          </header>
          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="mt-6 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <p className="mt-2 text-sm text-slate-400">
                    A Tax Rate can be associated with fees, products, rentals
                    and unit types.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-slate-700 bg-slate-900 shadow-lg">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b border-slate-700 transition-colors hover:bg-slate-800/50">
                          <TableHead className="text-left text-slate-300">
                            Name
                          </TableHead>
                          <TableHead className="text-left text-slate-300">
                            Tax Rate
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Action
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {taxRates.map((taxRate) => (
                          <TableRow
                            key={taxRate.id}
                            className="border-b border-slate-700 transition-colors hover:bg-slate-800/50"
                          >
                            <TableCell className="font-medium text-white">
                              {taxRate.name}
                            </TableCell>
                            <TableCell className="text-white">
                              {taxRate.rate}%
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
