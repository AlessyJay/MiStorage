"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreditCard, Trash2, Edit, Plus, PenBox } from "lucide-react";

interface PaymentCard {
  id: string;
  type: "visa" | "mastercard" | "amex";
  last4: string;
  expDate: string;
  isDefault: boolean;
  isActive: boolean;
}

export default function BillingInformationPage() {
  const [cards] = useState<PaymentCard[]>([
    {
      id: "1",
      type: "visa",
      last4: "7830",
      expDate: "06/24",
      isDefault: true,
      isActive: true,
    },
    {
      id: "2",
      type: "visa",
      last4: "5775",
      expDate: "06/24",
      isDefault: false,
      isActive: true,
    },
    {
      id: "3",
      type: "mastercard",
      last4: "1075",
      expDate: "02/25",
      isDefault: false,
      isActive: true,
    },
    {
      id: "4",
      type: "mastercard",
      last4: "4962",
      expDate: "06/24",
      isDefault: false,
      isActive: false,
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
              Facility Payment Accounts
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Manage Accounts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-4">
                          <CreditCard className="text-blue-500" />
                          <h3 className="text-xl font-semibold text-white">
                            Credit card(s)
                          </h3>
                        </div>
                        <p className="text-sm text-slate-400">
                          Manage your credit cards and payment options.
                        </p>
                      </div>
                      <Button className="mt-7 w-fit bg-blue-600/90 text-white backdrop-blur-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/20">
                        <Plus className="mr-2 size-4" />
                        Add new card
                      </Button>
                    </div>

                    <div className="col-span-1 space-y-4 md:col-span-2">
                      {cards
                        .filter((card) => card.isActive)
                        .map((card, index) => (
                          <motion.div
                            key={card.id}
                            {...staggeredFadeIn}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 backdrop-blur-sm"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="flex size-12 items-center justify-center rounded-lg bg-white p-2">
                                {card.type === "visa" ? (
                                  <span className="text-xl font-bold text-blue-600">
                                    VISA
                                  </span>
                                ) : (
                                  <span className="text-xl font-bold text-orange-600">
                                    MC
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-white">
                                  {card.type === "visa" ? "Visa" : "Mastercard"}{" "}
                                  ending in {card.last4}
                                </p>
                                <p className="text-sm text-slate-400">
                                  Exp. date {card.expDate}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {card.isDefault ? (
                                <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                                  Default
                                </span>
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                                >
                                  Set as Default
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                              >
                                <Edit className="mr-2 size-4" />
                                Edit
                              </Button>
                              <Button
                                size="icon"
                                className="text-red-500 hover:text-red-600"
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  {cards.some((card) => !card.isActive) && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Inactive Cards
                      </h3>
                      {cards
                        .filter((card) => !card.isActive)
                        .map((card, index) => (
                          <motion.div
                            key={card.id}
                            {...staggeredFadeIn}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-900/50 p-4 backdrop-blur-sm"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="flex size-12 items-center justify-center rounded-lg bg-white/90 p-2">
                                {card.type === "visa" ? (
                                  <span className="text-xl font-bold text-blue-600/50">
                                    VISA
                                  </span>
                                ) : (
                                  <span className="text-xl font-bold text-orange-600/50">
                                    MC
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-slate-400">
                                  {card.type === "visa" ? "Visa" : "Mastercard"}{" "}
                                  ending in {card.last4}
                                </p>
                                <p className="text-sm text-slate-500">
                                  Exp. date {card.expDate}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                                Expired
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                              >
                                <Edit className="mr-2 size-4" />
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                              >
                                Activate
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-slate-400 hover:text-red-400"
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
