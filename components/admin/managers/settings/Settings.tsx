"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

export default function ManagersSettingsPage() {
  const [strongPasswords, setStrongPasswords] = useState<boolean>(false);
  const [changeEvery90Days, setChangeEvery90Days] = useState<boolean>(false);
  const [differentFromPrevious, setDifferentFromPrevious] =
    useState<boolean>(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const handleUpdate = () => {
    console.log("Updating settings:", {
      strongPasswords,
      changeEvery90Days,
      differentFromPrevious,
    });
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
              Managers
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Password Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-slate-400">
                    These password requirements only apply to managers and sales
                    associates, not customers (tenants).
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="strongPasswords"
                        checked={strongPasswords}
                        onCheckedChange={(checked) =>
                          setStrongPasswords(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="strongPasswords"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Require stronger passwords
                      </Label>
                    </div>
                    <p className="ml-6 text-sm text-slate-400">
                      Strong passwords are at least 7 characters long and
                      include both numeric and alphabetic characters
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="changeEvery90Days"
                        checked={changeEvery90Days}
                        onCheckedChange={(checked) =>
                          setChangeEvery90Days(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="changeEvery90Days"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Require passwords to be changed every 90 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="differentFromPrevious"
                        checked={differentFromPrevious}
                        onCheckedChange={(checked) =>
                          setDifferentFromPrevious(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="differentFromPrevious"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Require a different password than the previous 4
                        passwords
                      </Label>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 pt-4">
                    <Button
                      variant="outline"
                      className="border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
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
