/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ConfigureSettings from "@/components/admin/settings/ConfigureSettings";
import { Eye, FileText, Notebook, Plus, ReceiptText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function SettingsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [autoLockoutApproval, setAutoLockoutApproval] = useState(false);
  const [manualLockoutApproval, setManualLockoutApproval] = useState(false);
  const [storageAgreements] = useState([
    { id: 1, name: "Storage Unit A-101", agreement: "Agreement details..." },
    { id: 2, name: "Storage Unit B-205", agreement: "Agreement details..." },
    { id: 3, name: "Storage Unit C-303", agreement: "Agreement details..." },
    { id: 4, name: "Storage Unit D-404", agreement: "Agreement details..." },
  ]);

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
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Settings</h1>
              <p className="text-slate-400">
                Manage your facility settings and preferences
              </p>
            </div>

            <div className="space-x-5">
              <Link href="/admin/setup/settings/billing-history">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  <ReceiptText />
                  Billing History
                </Button>
              </Link>
              <Link href="/admin/setup/settings/billing-information">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  <Notebook />
                  Billing Information
                </Button>
              </Link>
              <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
                Configure Settings
              </Button>
            </div>

            <ConfigureSettings
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </header>

          <hr className="mt-4 w-full border-muted-foreground" />

          {/* Content Area */}
          <ScrollArea className="mt-6 flex-1 rounded-2xl">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div {...fadeInUp}>
                <Card className="border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all hover:bg-slate-800/80">
                  <CardHeader>
                    <CardTitle className="text-white">
                      New Renter Instructions
                    </CardTitle>
                    <CardDescription>
                      Update instructions for new renters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="Enter instructions for new renters..."
                      className="min-h-[200px] bg-slate-900/50 text-white placeholder:text-slate-500"
                    />
                    <Button className="mt-4 w-full bg-blue-600/90 backdrop-blur-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/20">
                      Save Instructions
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all hover:bg-slate-800/80">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Lockout Approval Settings
                    </CardTitle>
                    <CardDescription>
                      Configure automatic and manual lockout approval
                      requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg bg-slate-900/50 p-4 backdrop-blur-sm">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="auto-lockout"
                          checked={autoLockoutApproval}
                          // onCheckedChange={setAutoLockoutApproval}
                          className="mt-1 bg-white"
                        />
                        <div>
                          <label
                            htmlFor="auto-lockout"
                            className="text-sm font-medium text-white"
                          >
                            Require approval for automatic lockout removal
                          </label>
                          <p className="mt-1 text-sm text-slate-400">
                            When a locked out customer pays their entire past
                            due balance, they will stay on the Lock Out Report
                            until manually approved.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-900/50 p-4 backdrop-blur-sm">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="manual-lockout"
                          checked={manualLockoutApproval}
                          // onCheckedChange={setManualLockoutApproval}
                          className="mt-1 bg-white"
                        />
                        <div>
                          <label
                            htmlFor="manual-lockout"
                            className="text-sm font-medium text-white"
                          >
                            Require approval for manual lockout removal
                          </label>
                          <p className="mt-1 text-sm text-slate-400">
                            A customer unlocked by a manager will stay on the
                            Lock Out Report until manually approved. When
                            unchecked, it will be marked as approved by the
                            manager that removed the lock out.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-fit">Update Settings</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="mt-6 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all hover:bg-slate-800/80">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>Storage Agreements</span>
                    <Link href="/admin/setup/settings/new-storage">
                      <Button
                        size="sm"
                        className="bg-blue-600 text-white backdrop-blur-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-emerald-700/20"
                      >
                        <Plus className="mr-2 size-4" />
                        New Storage
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {storageAgreements.map((storage) => (
                      <div
                        key={storage.id}
                        className="flex items-center justify-between rounded-lg bg-slate-900/50 p-3 backdrop-blur-sm transition-all hover:bg-slate-900/80"
                      >
                        <span className="text-white">{storage.name}</span>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-700 bg-slate-800/50 text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-700 hover:text-white"
                              >
                                <FileText className="mr-2 size-4" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="border-slate-700 bg-slate-800/90 backdrop-blur-sm">
                              <DialogHeader>
                                <DialogTitle className="text-white">
                                  {storage.name} Agreement
                                </DialogTitle>
                              </DialogHeader>
                              <div className="mt-4 text-slate-300">
                                {storage.agreement}
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-700 bg-slate-800/50 text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-700 hover:text-white"
                          >
                            <Eye className="mr-2 size-4" />
                            Preview PDF
                          </Button>
                        </div>
                      </div>
                    ))}
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
