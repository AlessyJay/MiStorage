"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  CalendarIcon,
  Plus,
  Clock,
  CheckCircle2,
  X,
  Pencil,
  MoreVertical,
  FileText,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.date({
    required_error: "Due date is required",
  }),
});

type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: "pending" | "completed";
  type: "due" | "upcoming" | "recurring";
};

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review Storage Units Maintenance",
    description: "Conduct monthly review of storage unit maintenance reports",
    dueDate: new Date("2024-12-09"),
    status: "pending",
    type: "due",
  },
  {
    id: "2",
    title: "Update Security Protocols",
    description: "Review and update facility security measures",
    dueDate: new Date("2024-12-11"),
    status: "pending",
    type: "upcoming",
  },
];

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<
    "all" | "due" | "upcoming" | "recurring" | "completed"
  >("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...values } : task,
        ),
      );
      setEditingTask(null);
    } else {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        ...values,
        status: "pending",
        type: "due",
      };
      setTasks([...tasks, newTask]);
    }
    form.reset();
    setIsDialogOpen(false);
  };

  const startEdit = (task: Task) => {
    setEditingTask(task);
    form.reset({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    });
    setIsDialogOpen(true);
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task,
      ),
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.status === "completed";
    return task.type === filter && task.status === "pending";
  });

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
              <h1 className="text-2xl font-bold text-white">Tasks</h1>
              <p className="text-slate-400">
                Manage and track your tasks efficiently
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/admin/todo/reports">
                <Button variant="outline" className="gap-2">
                  <FileText className="size-4" />
                  Task Report
                </Button>
              </Link>
              <Button variant="outline" className="gap-2">
                <RotateCcw className="size-4" />
                New Recurring Task
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="size-4" />
                    New Task
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-none bg-slate-900 text-white sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>
                      {editingTask ? "Edit Task" : "Create New Task"}
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                      {editingTask
                        ? "Edit your task details"
                        : "Add a new task to your list"}
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="mt-4 space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-slate-800"
                                placeholder="Enter task title"
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
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="bg-slate-800"
                                placeholder="Enter task description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Due Date</FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 size-4" />
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                    disabled={[
                                      {
                                        before: new Date(),
                                      },
                                    ]}
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end gap-3">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            setIsDialogOpen(false);
                            setEditingTask(null);
                            form.reset();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">
                          {editingTask ? "Save Changes" : "Create Task"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </header>

          <div className="mt-6 flex gap-2 overflow-x-auto">
            {["all", "due", "upcoming", "recurring", "completed"].map(
              (type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "ghost"}
                  className="min-w-[100px] text-white"
                  onClick={() => setFilter(type as typeof filter)}
                >
                  {type === "all"
                    ? "All Tasks"
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ),
            )}
          </div>

          <motion.div
            className="mt-6 grid flex-1 gap-4 overflow-y-auto pr-2 sm:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredTasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-0.5",
                      task.status === "completed" &&
                        "from-green-600 to-green-800",
                    )}
                  >
                    <div className="h-full rounded-[0.7rem] bg-slate-900 p-4">
                      <div className="flex h-full flex-col">
                        <div className="mb-2 flex items-center justify-between">
                          <div
                            className={cn(
                              "rounded-full px-2 py-1 text-xs font-semibold",
                              task.status === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-blue-500/20 text-blue-400",
                            )}
                          >
                            {task.status === "completed"
                              ? "Completed"
                              : "In Progress"}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="size-8 text-slate-400"
                              >
                                <MoreVertical className="size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-32">
                              <DropdownMenuItem
                                onClick={() => toggleTaskStatus(task.id)}
                              >
                                <CheckCircle2 className="mr-2 size-4" />
                                {task.status === "completed"
                                  ? "Mark Incomplete"
                                  : "Mark Complete"}
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => startEdit(task)}>
                                <Pencil className="mr-2 size-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => deleteTask(task.id)}
                                className="text-red-500"
                              >
                                <X className="mr-2 size-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex-1">
                          <h3
                            className={cn(
                              "mb-2 line-clamp-2 text-lg font-semibold text-white",
                              task.status === "completed" && "text-green-400",
                            )}
                          >
                            {task.title}
                          </h3>
                          <p className="line-clamp-3 text-sm text-slate-400">
                            {task.description}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="size-3" />
                            <span>{format(task.dueDate, "MMM d, yyyy")}</span>
                          </div>
                          <div className="rounded-full bg-slate-800 px-2 py-1">
                            {task.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
