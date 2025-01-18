"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, isFuture } from "date-fns";
import {
  CalendarIcon,
  Clock,
  Download,
  FileDown,
  Filter,
  Loader2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskReport, taskReportSchema } from "./types";
import type { z } from "zod";

// Sample data
const reports: TaskReport[] = [
  {
    id: "1",
    dueDate: new Date("2024-02-15"),
    completedAt: new Date("2024-02-14"),
    name: "Monthly Security Audit",
    description: "Complete security audit for all storage units",
    createdAt: new Date("2024-02-01"),
    createdBy: "John Smith",
    status: "completed",
  },
  {
    id: "2",
    dueDate: new Date("2024-02-20"),
    completedAt: null,
    name: "Maintenance Check",
    description: "Quarterly maintenance check for facility equipment",
    createdAt: new Date("2024-02-05"),
    createdBy: "Sarah Johnson",
    status: "pending",
  },
  // Add more sample data as needed
];

export default function TaskReportsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredReports, setFilteredReports] = useState<TaskReport[]>(reports);
  const [activeFilters, setActiveFilters] = useState(0);

  const form = useForm<z.infer<typeof taskReportSchema>>({
    resolver: zodResolver(taskReportSchema),
    defaultValues: {
      status: "all",
      createdBy: "all",
      dateRange: {
        from: undefined,
        to: undefined,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof taskReportSchema>) => {
    setIsLoading(true);
    // Count active filters
    let filterCount = 0;
    if (values.status !== "all") filterCount++;
    if (values.createdBy !== "all") filterCount++;
    if (values.dateRange.from || values.dateRange.to) filterCount++;
    setActiveFilters(filterCount);

    // Simulate API call
    setTimeout(() => {
      const filtered = reports.filter((report) => {
        const matchesStatus =
          values.status === "all" || report.status === values.status;
        const matchesCreator =
          values.createdBy === "all" || report.createdBy === values.createdBy;
        const matchesDateRange =
          (!values.dateRange.from ||
            new Date(report.createdAt) >= values.dateRange.from) &&
          (!values.dateRange.to ||
            new Date(report.createdAt) <= values.dateRange.to);
        return matchesStatus && matchesCreator && matchesDateRange;
      });
      setFilteredReports(filtered);
      setIsLoading(false);
    }, 500);
  };

  const resetFilters = () => {
    form.reset();
    setFilteredReports(reports);
    setActiveFilters(0);
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
              <h1 className="text-2xl font-bold text-white">Task Reports</h1>
              <p className="text-slate-400">
                Generate and analyze task reports
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <FileDown className="size-4" />
                    Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Download className="mr-2 size-4" />
                    Export as PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 size-4" />
                    Export as CSV
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <div className="mt-8 h-full rounded-3xl border border-slate-700 bg-slate-800">
            {/* Filters Section */}
            <div className="border-b border-slate-700 p-4 md:p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <motion.div
                    className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400">
                            Status
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-white">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="all">All Status</SelectItem>
                              <SelectItem value="completed">
                                Completed
                              </SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="overdue">Overdue</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="createdBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400">
                            Created By
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-slate-700 bg-white">
                                <SelectValue placeholder="Select creator" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="all">All Users</SelectItem>
                              <SelectItem value="John Smith">
                                John Smith
                              </SelectItem>
                              <SelectItem value="Sarah Johnson">
                                Sarah Johnson
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateRange"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-slate-400">
                            Date Range
                          </FormLabel>
                          <div
                            className={cn(
                              "grid gap-2",
                              field.value?.from && "sm:grid-cols-2",
                            )}
                          >
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start border-slate-700 bg-white text-left font-normal",
                                    !field.value?.from &&
                                      "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 size-4" />
                                  {field.value?.from ? (
                                    format(field.value.from, "LLL dd, y")
                                  ) : (
                                    <span>Start date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value?.from}
                                  onSelect={(date) =>
                                    field.onChange({
                                      ...field.value,
                                      from: date,
                                    })
                                  }
                                  disabled={(date) => isFuture(date)}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            {field.value?.from && (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start border-slate-700 bg-white text-left font-normal",
                                      !field.value?.to &&
                                        "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 size-4" />
                                    {field.value?.to ? (
                                      format(field.value.to, "LLL dd, y")
                                    ) : (
                                      <span>End date</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value?.to}
                                    onSelect={(date) =>
                                      field.onChange({
                                        ...field.value,
                                        to: date,
                                      })
                                    }
                                    disabled={(date) => {
                                      return !!(
                                        isFuture(date) ||
                                        (field.value?.from &&
                                          date < field.value.from)
                                      );
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            )}
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex items-end gap-2">
                      <Button
                        type="submit"
                        className="flex-1 gap-2"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <Filter className="size-4" />
                        )}
                        <span className="hidden sm:inline">
                          {activeFilters > 0
                            ? `${activeFilters} Filters Applied`
                            : "Apply Filters"}
                        </span>
                        <span className="sm:hidden">Filter</span>
                      </Button>
                      {activeFilters > 0 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={resetFilters}
                          className="border-slate-700 bg-red-500 hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-400"
                        >
                          <X className="size-4" />
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </form>
              </Form>
            </div>

            {/* Table Section */}
            <motion.div
              className="overflow-x-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700 hover:bg-transparent">
                    <TableHead className="text-slate-400">Due Date</TableHead>
                    <TableHead className="text-slate-400">Completed</TableHead>
                    <TableHead className="text-slate-400">Name</TableHead>
                    <TableHead className="hidden text-slate-400 md:table-cell">
                      Description
                    </TableHead>
                    <TableHead className="text-slate-400">Status</TableHead>
                    <TableHead className="hidden text-slate-400 lg:table-cell">
                      Created By
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {filteredReports.map((report) => (
                      <motion.tr
                        key={report.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="group border-slate-700 hover:bg-slate-700/30"
                      >
                        <TableCell className="font-medium text-slate-300">
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-slate-400" />
                            {format(report.dueDate, "MMM d, yyyy")}
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {report.completedAt
                            ? format(report.completedAt, "MMM d, yyyy")
                            : "-"}
                        </TableCell>
                        <TableCell className="font-medium text-slate-300">
                          {report.name}
                        </TableCell>
                        <TableCell className="hidden max-w-[200px] truncate text-slate-400 md:table-cell">
                          {report.description}
                        </TableCell>
                        <TableCell>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium",
                              report.status === "completed" &&
                                "bg-green-500/20 text-green-400",
                              report.status === "pending" &&
                                "bg-yellow-500/20 text-yellow-400",
                              report.status === "overdue" &&
                                "bg-red-500/20 text-red-400",
                            )}
                          >
                            <span className="size-1.5 rounded-full bg-current" />
                            {report.status.charAt(0).toUpperCase() +
                              report.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden text-slate-400 lg:table-cell">
                          {report.createdBy}
                        </TableCell>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
