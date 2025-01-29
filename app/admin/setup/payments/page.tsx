"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function PaymentProcessingPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAccountVerified, setIsAccountVerified] = useState(true);
  const [acceptedPaymentMethods, setAcceptedPaymentMethods] = useState({
    visa: true,
    mastercard: true,
    discover: true,
    americanExpress: true,
    ach: true,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const handlePaymentMethodChange = (method: string) => {
    setAcceptedPaymentMethods((prev) => ({
      ...prev,
      [method]: !prev[method as keyof typeof prev],
    }));
  };

  const handleUpdateSettings = () => {
    console.log("Updated payment methods:", acceptedPaymentMethods);
    // Here you would typically send this data to your backend
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
              Easy Storage Payments
            </h1>
            <Link href="/admin/setup/payments/edit-profile">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Edit Your Account
              </Button>
            </Link>
          </header>
          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp} className="space-y-6">
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Payments & Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    Transfers to your bank account happen daily on a rolling 2
                    business day schedule, while ACH payments may take up to 9
                    business days to process.
                  </p>
                  <p className="text-slate-300">
                    For example, transactions processed on a Monday are
                    deposited into your account on Wednesday. Transactions
                    processed on Friday will be deposited on Tuesday.
                  </p>
                  <p className="text-slate-300">
                    Our Payment Processing Report lists all deposits to your
                    bank account. Each deposit also lists the transactions and
                    the associated fee amount for that deposit.
                  </p>
                  <div
                    className={`flex items-center rounded-md p-4 ${isAccountVerified ? "bg-green-600/20" : "bg-yellow-600/20"}`}
                  >
                    {isAccountVerified ? (
                      <Check className="mr-2 size-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="mr-2 size-5 text-yellow-500" />
                    )}
                    <span className="text-white">
                      {isAccountVerified
                        ? "Your account is verified and active"
                        : "Your account is not verified"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Support & Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Easy Storage Payments is provided and handled by the same
                    support team you already know and trust. Call 435-656-1990
                    or email us at support@storageunitsoftware.com with any
                    questions or concerns you have.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Accepted Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    {Object.entries(acceptedPaymentMethods).map(
                      ([method, isAccepted]) => (
                        <div
                          key={method}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem
                            id={method}
                            value={method}
                            checked={isAccepted}
                            onClick={() => handlePaymentMethodChange(method)}
                            className="border-slate-500 text-blue-600"
                          />
                          <Label htmlFor={method} className="text-white">
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </Label>
                        </div>
                      ),
                    )}
                  </RadioGroup>
                  <p className="text-sm text-slate-400">
                    Note that changing these settings will only apply to new
                    payment accounts going forward. Disabling a payment method
                    here will not cancel active recurring billing accounts using
                    that method.
                  </p>
                  <Button
                    onClick={handleUpdateSettings}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Update Settings
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
