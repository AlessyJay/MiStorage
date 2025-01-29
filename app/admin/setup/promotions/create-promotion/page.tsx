"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  promotionFormSchema,
  type PromotionFormValues,
} from "@/validations/index";
import { Pagination } from "@/components/ui/pagination";

// Mock data for unit types
const unitTypes = [
  "Small Storage",
  "Medium Storage",
  "Large Storage",
  "Climate Controlled",
  "Vehicle Storage",
  "RV Parking",
  "RV Parking1",
  "RV Parking2",
  "RV Parking3",
  "RV Parking4",
  "RV Parking5",
  "RV Parking6",
  "RV Parking7",
];

export default function NewPromotionPage() {
  const [selectAllUnits, setSelectAllUnits] = useState(false);
  const [selectedUnitTypes, setSelectedUnitTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const form = useForm<PromotionFormValues>({
    resolver: zodResolver(promotionFormSchema),
    defaultValues: {
      name: "",
      description: "",
      method: "manual",
      discountType: "percentage",
      setup: "immediately",
      shouldNotExpire: false,
      unitTypes: [],
    },
  });

  const handleUnitTypeToggle = (unitType: string) => {
    setSelectedUnitTypes((prev) =>
      prev.includes(unitType)
        ? prev.filter((type) => type !== unitType)
        : [...prev, unitType],
    );
    form.setValue("unitTypes", selectedUnitTypes);
  };

  const handleSelectAllUnits = () => {
    if (selectAllUnits) {
      setSelectedUnitTypes([]);
    } else {
      setSelectedUnitTypes([...unitTypes]);
    }
    setSelectAllUnits(!selectAllUnits);
    form.setValue("unitTypes", selectedUnitTypes);
  };

  const onSubmit = (data: PromotionFormValues) => {
    console.log(data);
    // Here you would typically send this data to your backend
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
              Promotions
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Create New Promotion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Promotion Name
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
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Description
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="border-none bg-slate-700 text-white"
                              />
                            </FormControl>
                            <FormDescription className="text-slate-400">
                              The Promotion Description is used to describe what
                              the promotion will be doing for the customer; e.g.
                              5% off each month. It will be viewed by the
                              manager and the customer.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <h3 className="mb-2 text-white">Availability</h3>
                        <p className="mb-4 text-sm text-slate-400">
                          Availability refers to the time period a Promotion can
                          be applied to a Rental. Once a promotion is applied to
                          a rental, the applied Promotion will continue even
                          after the Promotion&apos;s Availability has expired.
                          If an end date is selected, customers will be able to
                          see when the promotion ends.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Start Date
                                </FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className="w-full border-slate-700 bg-slate-700 pl-3 text-left font-normal text-white"
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto size-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto bg-slate-800 p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date < new Date()}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  End Date
                                </FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className="w-full border-slate-700 bg-slate-700 pl-3 text-left font-normal text-white"
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto size-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto bg-slate-800 p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date < form.getValues("startDate")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name="method"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Method</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="border-none bg-slate-700 text-white">
                                  <SelectValue placeholder="Select a method" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-700 text-white">
                                <SelectItem value="manual">Manual</SelectItem>
                                <SelectItem value="promoCode">
                                  Promo Code
                                </SelectItem>
                                <SelectItem value="automatic">
                                  Automatic
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription className="text-slate-400">
                              {field.value === "manual" &&
                                "Allows the Promotion to be applied manually by Managers and Sales Associates."}
                              {field.value === "promoCode" &&
                                "Allows customers to add a promo code during the rental process to apply the Promotion."}
                              {field.value === "automatic" &&
                                "Only one active Automatic or Promo Code Promotion is allowed per Unit Type."}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4">
                        <FormLabel className="text-white">Unit Types</FormLabel>
                        <FormDescription className="text-slate-400">
                          Select the Unit Types this Promotion will apply to.
                          Unit Types marked Ineligible are currently part of
                          another Promo Code or Automatic Promotion. Retire or
                          delete those promotions to create a new promotion
                          using these Unit Types.
                        </FormDescription>
                        <div className="flex gap-6">
                          <Button
                            type="button"
                            onClick={handleSelectAllUnits}
                            className={cn(
                              "mb-4",
                              selectAllUnits
                                ? "border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                                : "bg-blue-600 text-white hover:bg-blue-700",
                            )}
                          >
                            {selectAllUnits ? "Deselect All" : "Select All"}
                          </Button>

                          <Input
                            type="text"
                            placeholder="Search unit types..."
                            className="mb-4 border-none bg-slate-700 text-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {unitTypes
                            .filter((unitType) =>
                              unitType
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()),
                            )
                            .slice(
                              (currentPage - 1) * itemsPerPage,
                              currentPage * itemsPerPage,
                            )
                            .map((unitType) => (
                              <Badge
                                key={unitType}
                                variant="secondary"
                                className={cn(
                                  "cursor-pointer",
                                  selectedUnitTypes.includes(unitType)
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-slate-700 text-white hover:bg-slate-600",
                                )}
                                onClick={() => handleUnitTypeToggle(unitType)}
                              >
                                {unitType}
                              </Badge>
                            ))}
                        </div>
                        {unitTypes.length > itemsPerPage && (
                          <Pagination
                            className="mt-4"
                            currentPage={currentPage}
                            totalPages={Math.ceil(
                              unitTypes.length / itemsPerPage,
                            )}
                            onPageChange={setCurrentPage}
                          />
                        )}
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="discountType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                Discount Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-none bg-slate-700 text-white">
                                    <SelectValue placeholder="Select discount type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-slate-700 text-white">
                                  <SelectItem value="percentage">
                                    Percentage
                                  </SelectItem>
                                  <SelectItem value="amount">Amount</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="discountValue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">
                                {form.watch("discountType") === "percentage"
                                  ? "Percentage"
                                  : "Amount"}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="number"
                                  className="border-none bg-slate-700 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="setup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Setup</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="border-none bg-slate-700 text-white">
                                  <SelectValue placeholder="Select setup" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-700 text-white">
                                <SelectItem value="immediately">
                                  Immediately
                                </SelectItem>
                                <SelectItem value="1">
                                  1 Billing Cycle
                                </SelectItem>
                                <SelectItem value="2">
                                  2 Billing Cycles
                                </SelectItem>
                                <SelectItem value="3">
                                  3 Billing Cycles
                                </SelectItem>
                                <SelectItem value="4">
                                  4 Billing Cycles
                                </SelectItem>
                                <SelectItem value="5">
                                  5 Billing Cycles
                                </SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription className="text-slate-400">
                              The promotion will begin after the number of
                              billing cycles selected.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <AnimatePresence>
                        {form.watch("setup") === "custom" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FormField
                              control={form.control}
                              name="customSetup"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">
                                    Custom Billing Cycles
                                  </FormLabel>
                                  <div className="flex items-center gap-2">
                                    <FormControl>
                                      <Input
                                        {...field}
                                        type="number"
                                        className="border-none bg-slate-700 text-white"
                                      />
                                    </FormControl>
                                    <span className="text-white">
                                      {Number(field.value) === 1
                                        ? "Billing Cycle"
                                        : "Billing Cycles"}
                                    </span>
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <FormField
                        control={form.control}
                        name="shouldNotExpire"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border border-slate-700 p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-white">
                                This promotion should not expire
                              </FormLabel>
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

                      <AnimatePresence>
                        {!form.watch("shouldNotExpire") && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FormField
                              control={form.control}
                              name="billingCycles"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">
                                    Number of billing cycles the promotion
                                    discount should last
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      type="number"
                                      className="border-none bg-slate-700 text-white"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

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
                          Create Promotion
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
