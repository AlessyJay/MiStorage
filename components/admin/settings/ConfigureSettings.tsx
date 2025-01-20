"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Building2,
  Check,
  Clock,
  Globe2,
  HelpCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ConfigureSettingsProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfigureSettings = ({
  isDialogOpen,
  setIsDialogOpen,
}: ConfigureSettingsProps) => {
  const [isSaving, setIsSaving] = useState(false);

  const settingsFormSchema = z.object({
    locale: z.string({
      required_error: "Please select a locale.",
    }),
    billingPeriod: z.string({
      required_error: "Please select a billing period.",
    }),
    timeZone: z.string({
      required_error: "Please select a timezone.",
    }),
    phoneFormat: z.string({
      required_error: "Please select a phone format.",
    }),
    unitFormat: z.string({
      required_error: "Please select a unit format.",
    }),
    features: z.object({
      enablePrepay: z.boolean().default(false),
      disablePartialPayments: z.boolean().default(true),
      enableCardSwiper: z.boolean().default(false),
      saveUnpaidRentals: z.boolean().default(true),
      autoAcknowledge: z.boolean().default(true),
      enableDeposits: z.boolean().default(true),
      editProfile: z.boolean().default(true),
      editBilling: z.boolean().default(true),
      scheduleMoveOuts: z.boolean().default(true),
    }),
    moveOutDays: z.string().min(1, "Required"),
    reservationDays: z.string().min(1, "Required"),
    prorating: z.string({
      required_error: "Please select a prorating option.",
    }),
  });

  type SettingsFormValues = z.infer<typeof settingsFormSchema>;

  const defaultValues: Partial<SettingsFormValues> = {
    locale: "us-dollar",
    billingPeriod: "2",
    timeZone: "mountain",
    phoneFormat: "us",
    unitFormat: "imperial",
    features: {
      enablePrepay: false,
      disablePartialPayments: true,
      enableCardSwiper: false,
      saveUnpaidRentals: true,
      autoAcknowledge: true,
      enableDeposits: true,
      editProfile: true,
      editBilling: true,
      scheduleMoveOuts: true,
    },
    moveOutDays: "2",
    reservationDays: "124",
    prorating: "no-prorate",
  };

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues,
  });

  async function onSubmit(data: SettingsFormValues) {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsDialogOpen(false);
    console.log(data);
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-2xl border-none bg-slate-900">
        <DialogHeader>
          <DialogTitle className="text-white">Facility Settings</DialogTitle>
          <DialogDescription className="text-white">
            Configure your storage facility&apos;s settings and preferences.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-6"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-800 p-2.5">
                    <Globe2 className="size-5 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="locale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Locale</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select locale" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us-dollar">
                                United States - Dollar ($) - MM/DD/YYYY
                              </SelectItem>
                              <SelectItem value="uk-pound">
                                United Kingdom - Pound (£) - DD/MM/YYYY
                              </SelectItem>
                              <SelectItem value="eu-euro">
                                European Union - Euro (€) - DD/MM/YYYY
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select your region&apos;s currency and date format.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-800 p-2.5">
                    <Clock className="size-5 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="timeZone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Time Zone
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select timezone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="pacific">
                                (GMT-07:00) Pacific Time
                              </SelectItem>
                              <SelectItem value="mountain">
                                (GMT-06:00) Mountain Time
                              </SelectItem>
                              <SelectItem value="central">
                                (GMT-05:00) Central Time
                              </SelectItem>
                              <SelectItem value="eastern">
                                (GMT-04:00) Eastern Time
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose your facility&apos;s timezone.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-800 p-2.5">
                    <Phone className="size-5 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="phoneFormat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Phone Number Format
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select format" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us">(555) 555-5555</SelectItem>
                              <SelectItem value="intl">
                                +1 555 555 5555
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose how phone numbers will be displayed.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-slate-800 p-2.5">
                    <Building2 className="size-5 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="unitFormat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Unit Dimension Format
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select format" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="imperial">
                                10w x 10l x 10h (ft)
                              </SelectItem>
                              <SelectItem value="metric">
                                3w x 3l x 3h (m)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose how unit dimensions will be displayed.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white">Features</h2>
                <div className="grid gap-4">
                  <TooltipProvider>
                    <FormField
                      control={form.control}
                      name="features.enablePrepay"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Enable prepay for customers
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow customers to prepay for their storage
                                  units
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.disablePartialPayments"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Disable partial payments for locked out customers
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Prevent locked out customers from making
                                  partial payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.enableCardSwiper"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Enable USB Card Swiper use
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.saveUnpaidRentals"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Save unpaid customer rentals
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.autoAcknowledge"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Automatically acknowledge new rentals /
                              reservations
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.enableDeposits"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Enabled additional deposits
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.editProfile"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Customers can edit profile information
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.editBilling"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Customers can edit billing information
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.scheduleMoveOuts"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FormLabel className="text-white">
                              Customers can schedule move outs
                            </FormLabel>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="size-4 text-slate-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Allow the use of USB card swipers for payments
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Add more feature toggles here */}
                  </TooltipProvider>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-white">
                  Additional Settings
                </h2>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="moveOutDays"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Days required before billing day
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              min="0"
                              className="w-20 border-slate-700 bg-slate-800 text-white"
                            />
                          </FormControl>
                          <FormDescription>
                            Number of days required before the billing day
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="reservationDays"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Reservation limit (days)
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              min="0"
                              className="w-20 border-slate-700 bg-slate-800 text-white"
                            />
                          </FormControl>
                          <FormDescription>
                            Maximum number of days for reservations
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="prorating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Customer Rental Prorating
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select prorating option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="no-prorate">
                                No Prorating
                              </SelectItem>
                              <SelectItem value="bill-first-prorate-now">
                                Bill for first full month, prorate second month
                                billed now.
                              </SelectItem>
                              <SelectItem value="bill-first-prorate-later">
                                Bill for first full month, prorate second month
                                billed now.
                              </SelectItem>
                              <SelectItem value="prorate-bill-full">
                                Prorate this month and bill full billing cycle
                                starting next month.
                              </SelectItem>
                              <SelectItem value="prorate-bill-now">
                                Prorate this month and bill now for the first
                                billing cycle.
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose how rental payments will be prorated
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="prorating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Default Prorating for Manager Rentals
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-slate-800 text-white">
                                <SelectValue placeholder="Select prorating option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="no-prorate">
                                No Prorating
                              </SelectItem>
                              <SelectItem value="bill-first-prorate-now">
                                Bill for first full month, prorate second month
                                billed now.
                              </SelectItem>
                              <SelectItem value="bill-first-prorate-later">
                                Bill for first full month, prorate second month
                                billed now.
                              </SelectItem>
                              <SelectItem value="prorate-bill-full">
                                Prorate this month and bill full billing cycle
                                starting next month.
                              </SelectItem>
                              <SelectItem value="prorate-bill-now">
                                Prorate this month and bill now for the first
                                billing cycle.
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose how rental payments will be prorated
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </ScrollArea>
        <DialogFooter className="bg-slate-900 px-6 py-4">
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={isSaving}
            className="min-w-[100px]"
          >
            {isSaving ? (
              <motion.div
                className="size-4 rounded-full border-2 border-slate-300/30 border-t-white"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ) : (
              <React.Fragment>
                <Check className="mr-2 size-4" />
                Save Changes
              </React.Fragment>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfigureSettings;
