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
import { Notebook, ReceiptText } from "lucide-react";

export default function SettingsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <ReceiptText />
                Billing History
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Notebook />
                Billing History
              </Button>
            </div>

            <ConfigureSettings
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </header>

          {/* Content Area */}
          <div className="mt-6 flex-1 overflow-y-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-slate-700 bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-white">General Settings</CardTitle>
                  <CardDescription>
                    Configure basic facility settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">
                    Configure your facility&apos;s locale, timezone, and other
                    basic settings.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 w-full"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Configure Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Add more setting cards here */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
