"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, PlayCircle, Mail, Phone, Globe } from "lucide-react";

// Mock data for available plans
const availablePlans = [
  { protectionLimit: "$2,000", monthlyFee: "$10" },
  { protectionLimit: "$3,000", monthlyFee: "$15" },
  { protectionLimit: "$5,000", monthlyFee: "$25" },
  { protectionLimit: "$10,000", monthlyFee: "$40" },
];

export default function TenantProtectionPage() {
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
          <header className="mb-6">
            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent">
              Tenant Protection
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp} className="space-y-6">
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Tenant Protection Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    Tenant protection provides an option for tenants to receive
                    reimbursement for certain losses without requiring
                    traditional insurance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      <FileText className="mr-2 size-4" /> Tenant Flyer
                    </Button>
                    <Button className="bg-green-600 text-white hover:bg-green-700">
                      <PlayCircle className="mr-2 size-4" /> Watch Training
                      Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Available Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="p-2 text-left text-slate-300">
                            Protection Limit
                          </th>
                          <th className="p-2 text-left text-slate-300">
                            Monthly Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {availablePlans.map((plan, index) => (
                          <tr
                            key={index}
                            className="border-b border-slate-700 last:border-b-0"
                          >
                            <td className="p-2 text-white">
                              {plan.protectionLimit}
                            </td>
                            <td className="p-2 text-white">
                              {plan.monthlyFee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="size-5 text-slate-400" />
                    <span className="text-white">
                      support@tenantprotection.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="size-5 text-slate-400" />
                    <span className="text-white">1-800-123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="size-5 text-slate-400" />
                    <span className="text-white">www.tenantprotection.com</span>
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
