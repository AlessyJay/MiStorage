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
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  CreditCard,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
} from "lucide-react";
import Link from "next/link";

// Mock data for promotions
const promotions = [
  {
    id: 1,
    title: "Summer Special",
    paymentMethod: "All Methods",
    discount: "10% off",
    description: "Get 10% off on all summer rentals",
    unitTypes: ["Small", "Medium", "Large"],
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    begins: "Immediately",
    duration: "3 months",
  },
  {
    id: 2,
    title: "New Customer Discount",
    paymentMethod: "Credit Card",
    discount: "$50 off",
    description: "Get $50 off your first month's rent",
    unitTypes: ["All Units"],
    startDate: "2023-05-01",
    endDate: "2023-12-31",
    begins: "On move-in",
    duration: "1 month",
  },
  {
    id: 3,
    title: "Holiday Special",
    paymentMethod: "All Methods",
    discount: "15% off",
    description: "Special holiday discount for new rentals",
    unitTypes: ["Premium", "Deluxe"],
    startDate: "2023-12-01",
    endDate: "2024-01-31",
    begins: "On move-in",
    duration: "2 months",
  },
];

export default function PromotionsPage() {
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
              Promotions
            </h1>
            <Link href="/admin/setup/promotions/create-promotion">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 size-4" /> Add a New Promotion
              </Button>
            </Link>
          </header>
          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="my-6 border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Manage Promotions
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Promotions provide a way to apply discounts to rentals. This
                    can be done manually during the rental, through a promo
                    code, or automatically per Unit Type. Promotions can be
                    deleted if they have never been applied to a rental. After
                    being applied to at least one rental, a promotion can be
                    retired, which removes it from the available promotions but
                    keeps it on active rentals.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {promotions.map((promotion) => (
                  <Card
                    key={promotion.id}
                    className="relative overflow-hidden border-slate-700/50 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                    <div className="absolute -right-20 -top-20 size-40 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 size-40 rounded-full bg-purple-500/10 blur-3xl" />

                    <CardHeader>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-slate-800/50 p-2 ring-1 ring-slate-700/50">
                        <Tag className="size-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {promotion.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {promotion.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="size-4 text-slate-400" />
                        <span className="text-sm text-slate-300">
                          {promotion.paymentMethod}
                        </span>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-3 ring-1 ring-slate-700/50">
                        <span className="text-lg font-semibold text-white">
                          {promotion.discount}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {promotion.unitTypes.map((unitType, index) => (
                          <Link
                            href={`/units/${unitType.toLowerCase()}`}
                            key={index}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-slate-800/50 text-slate-300 ring-1 ring-slate-700/50 hover:bg-slate-700/50"
                            >
                              {unitType}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="size-4 text-slate-400" />
                          <span className="text-slate-300">
                            {promotion.startDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="size-4 text-slate-400" />
                          <span className="text-slate-300">
                            {promotion.endDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ArrowRight className="size-4 text-slate-400" />
                          <span className="text-slate-300">
                            {promotion.begins}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="size-4 text-slate-400" />
                          <span className="text-slate-300">
                            {promotion.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3 pt-4">
                        <Button
                          variant="outline"
                          className="h-9 border-slate-700/50 bg-slate-800/50 text-white hover:bg-slate-700/50 hover:text-white"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          className="h-9 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
