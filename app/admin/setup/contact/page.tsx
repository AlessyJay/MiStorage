"use client";

import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema, type ContactFormValues } from "@/validations/index";
import { AlertCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      facilityName: "",
      websiteAddress: "",
      physicalAddress: {
        address: "",
        city: "",
        state: "",
        zip: "",
      },
      billingAddress: {
        address: "",
        city: "",
        stateProvince: "",
        zipPostalCode: "",
        phone: "",
      },
      checkBatch: {
        bankName: "",
        routingNumber: "",
        accountNumber: "",
      },
    },
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted:", data);
    // Here you would typically send this data to your backend
  }

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
              Contact
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <h2 className="mb-4 text-lg font-semibold text-white">
                        General
                      </h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="facilityName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Facility Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="websiteAddress"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Website Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormDescription className="text-xs text-slate-400">
                                This changes the website address displayed in
                                notifications. Contact support to change the
                                domain where your website and software are
                                hosted.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="mb-4 flex items-center">
                          <h2 className="text-lg font-semibold text-white">
                            Physical Address
                          </h2>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <AlertCircle className="ml-2 size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  This is the physical location of your
                                  facility.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="physicalAddress.address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="physicalAddress.city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  City
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="physicalAddress.state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  State
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="physicalAddress.zip"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  ZIP
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="mb-4 flex items-center">
                          <h2 className="text-lg font-semibold text-white">
                            Billing Address
                          </h2>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <AlertCircle className="ml-2 size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  This is the address where billing information
                                  will be sent.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="billingAddress.address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="billingAddress.city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  City
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="billingAddress.stateProvince"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  State/Province
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="billingAddress.zipPostalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  ZIP/Postal Code
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="billingAddress.phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Phone
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    className="border-none bg-slate-700 text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <h2 className="mb-4 text-lg font-semibold text-white">
                        Check Batch
                      </h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="checkBatch.bankName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Bank Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="checkBatch.routingNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Routing Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="checkBatch.accountNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Account Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Update Contact
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
