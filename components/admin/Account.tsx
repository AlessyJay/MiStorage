"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const accounts = [
  {
    name: "Hellyton Costa",
    transactionId: "XXXXXXX4002",
    amount: 13.0,
    refId: "#1038153",
  },
  {
    name: "Hellyton Costa",
    transactionId: "XXXXXXX4002",
    amount: 19.0,
    refId: "#1235896",
  },
  {
    name: "Hellyton Costa",
    transactionId: "XXXXXXX4002",
    amount: 22.0,
    refId: "#1035683",
  },
  {
    name: "Mark Alan A",
    transactionId: "XXXXXXX4242",
    amount: 331.12,
    refId: "#1034314",
  },
  {
    name: "Mark Alan A",
    transactionId: "XXXXXXX4242",
    amount: 331.13,
    refId: "#1034244",
  },
];

export function AccountsReceivable() {
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
        <CardTitle className="text-white">Accounts Receivable</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {accounts.map((account) => (
            <motion.div
              key={account.refId}
              variants={item}
              className="flex items-center justify-between rounded-lg bg-slate-900/50 p-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="size-10 border border-blue-500/20 bg-blue-500/10">
                  <AvatarFallback className="text-blue-400">
                    {account.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-slate-200">{account.name}</p>
                  <p className="text-sm text-slate-400">
                    Your Card {account.transactionId} Has Been Successfully
                    Charged Ref# {account.refId}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-slate-400">Balance</p>
                  <p className="font-medium text-slate-200">
                    ${account.amount.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:bg-blue-400/10 hover:text-blue-300"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
