"use client";

import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  editProfileFormSchema,
  type editProfileFormValues,
} from "@/validations/index";

export default function EditProfilePage() {
  const form = useForm<editProfileFormValues>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      routingNumber: "",
      accountNumber: "",
      paymentMethod: "personalChecking",
    },
  });

  const onSubmit = (data: editProfileFormValues) => {
    console.log(data);
  };

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
              Edit Bank Account for MiCamp Payments
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Bank Account Information
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Tenant payments are deposited to this bank account.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-semibold text-white">
                        New Information
                      </h3>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <FormField
                            control={form.control}
                            name="routingNumber"
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
                            name="accountNumber"
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

                          <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Payment Method
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="border-none bg-slate-700 text-white">
                                      <SelectValue placeholder="Select a payment method" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-slate-700 text-white">
                                    <SelectItem value="personalChecking">
                                      Personal Checking Account
                                    </SelectItem>
                                    <SelectItem value="personalSavings">
                                      Personal Savings Account
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-end space-x-4 pt-4">
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
                              Update Account
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-semibold text-white">
                        Current Information
                      </h3>
                      <div className="space-y-2 text-slate-300">
                        <p>
                          <span className="font-semibold">Routing number:</span>{" "}
                          124000054
                        </p>
                        <p>
                          <span className="font-semibold">Account number:</span>{" "}
                          XXXXXX0021
                        </p>
                        <p>
                          <span className="font-semibold">Payment method:</span>{" "}
                          Corporate checking account
                        </p>
                      </div>
                    </div>
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
