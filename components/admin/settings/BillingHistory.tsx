"use client";

import React, { useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";

interface BillingRecord {
  id: string;
  invoiced: string;
  due: string;
  amount: number;
  tax: number;
  total: number;
  service: string;
  description: string;
  payments: number;
}

export default function BillingHistoryPage() {
  const [billingHistory] = useState<BillingRecord[]>([
    {
      id: "1",
      invoiced: "2024-03-15",
      due: "2024-04-15",
      amount: 150.0,
      tax: 12.0,
      total: 162.0,
      service: "Storage Rental",
      description: "Monthly storage unit rental - Unit A101",
      payments: 162.0,
    },
    {
      id: "2",
      invoiced: "2024-02-15",
      due: "2024-03-15",
      amount: 150.0,
      tax: 12.0,
      total: 162.0,
      service: "Storage Rental",
      description: "Monthly storage unit rental - Unit A101",
      payments: 162.0,
    },
    {
      id: "3",
      invoiced: "2024-01-15",
      due: "2024-02-15",
      amount: 150.0,
      tax: 12.0,
      total: 162.0,
      service: "Storage Rental",
      description: "Monthly storage unit rental - Unit A101",
      payments: 162.0,
    },
  ]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const staggeredFadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
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
          <header className="mb-6">
            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent">
              Facility Billing History
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-slate-700/50">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-slate-700/50 hover:bg-slate-800/50">
                          <TableHead className="text-slate-300">
                            Invoiced
                          </TableHead>
                          <TableHead className="text-slate-300">Due</TableHead>
                          <TableHead className="text-right text-slate-300">
                            Amount
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Tax
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Total
                          </TableHead>
                          <TableHead className="text-slate-300">
                            Service
                          </TableHead>
                          <TableHead className="text-slate-300">
                            Description
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Payments
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {billingHistory.map((record, index) => (
                          <motion.tr
                            key={record.id}
                            {...staggeredFadeIn}
                            transition={{ delay: index * 0.1 }}
                            className="border-slate-700/50 text-slate-300 transition-colors hover:bg-slate-800/50"
                          >
                            <TableCell className="font-medium">
                              {new Date(record.invoiced).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              {new Date(record.due).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              ${record.amount.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right">
                              ${record.tax.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right">
                              ${record.total.toFixed(2)}
                            </TableCell>
                            <TableCell>{record.service}</TableCell>
                            <TableCell>{record.description}</TableCell>
                            <TableCell className="text-right">
                              ${record.payments.toFixed(2)}
                            </TableCell>
                          </motion.tr>
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
