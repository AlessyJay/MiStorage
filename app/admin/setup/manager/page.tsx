"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Settings,
  UserPlus,
  Search,
  MoreHorizontal,
  Mail,
  Phone,
  Edit,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface Manager {
  id: string;
  name: string;
  role: string;
  username: string;
  email: string;
  phone: string;
  created: string;
}

export default function ManagersPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [managers] = useState<Manager[]>([
    {
      id: "1",
      name: "John Smith",
      role: "Manager",
      username: "jsmith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      created: "2024-01-15",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "Sales Associate",
      username: "sjohnson",
      email: "sarah.johnson@example.com",
      phone: "(555) 234-5678",
      created: "2024-02-01",
    },
    {
      id: "3",
      name: "Michael Brown",
      role: "Manager",
      username: "mbrown",
      email: "michael.brown@example.com",
      phone: "(555) 345-6789",
      created: "2024-02-15",
    },
    {
      id: "4",
      name: "Emily Davis",
      role: "Sales Associate",
      username: "edavis",
      email: "emily.davis@example.com",
      phone: "(555) 456-7890",
      created: "2024-03-01",
    },
  ]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const staggeredFadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };

  const filteredManagers = managers.filter((manager) =>
    Object.values(manager).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

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
              <h1 className="bg-clip-text text-xl font-bold text-white">
                Managers & Sales Associates
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/admin/setup/manager/settings">
                <Button className="bg-blue-600/90 text-white backdrop-blur-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/20">
                  <Settings className="mr-2 size-4" />
                  Settings
                </Button>
              </Link>

              <Link href="/admin/setup/manager/create-manager">
                <Button className="bg-emerald-600/90 text-white backdrop-blur-sm transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-700/20">
                  <UserPlus className="mr-2 size-4" />
                  Create New Manager
                </Button>
              </Link>
            </div>
          </header>

          <div className="mt-4 border-b border-slate-700/50" />

          <ScrollArea className="mt-6 flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-white">Manage</CardTitle>
                    <div className="relative w-full md:w-96">
                      <Search className="absolute left-2 top-2.5 size-4 text-slate-400" />
                      <Input
                        placeholder="Search by name, role, email..."
                        className="border-slate-700 bg-slate-900/50 pl-8 text-white placeholder:text-slate-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-slate-700/50">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-slate-700/50 hover:bg-slate-800/50">
                          <TableHead className="text-slate-300">Name</TableHead>
                          <TableHead className="text-slate-300">Role</TableHead>
                          <TableHead className="text-slate-300">
                            Username
                          </TableHead>
                          <TableHead className="text-slate-300">
                            Email
                          </TableHead>
                          <TableHead className="text-slate-300">
                            Phone Number
                          </TableHead>
                          <TableHead className="text-slate-300">
                            Created
                          </TableHead>
                          <TableHead className="text-right text-slate-300">
                            Action
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredManagers.map((manager, index) => (
                          <motion.tr
                            key={manager.id}
                            {...staggeredFadeIn}
                            transition={{ delay: index * 0.1 }}
                            className="border-slate-700/50 text-slate-300 transition-colors hover:bg-slate-800/50"
                          >
                            <TableCell className="font-medium">
                              {manager.name}
                            </TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  manager.role === "Manager"
                                    ? "bg-blue-400/10 text-blue-400"
                                    : "bg-emerald-400/10 text-emerald-400"
                                }`}
                              >
                                {manager.role}
                              </span>
                            </TableCell>
                            <TableCell>{manager.username}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Mail className="size-4 text-slate-400" />
                                {manager.email}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Phone className="size-4 text-slate-400" />
                                {manager.phone}
                              </div>
                            </TableCell>
                            <TableCell>
                              {new Date(manager.created).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="size-8 p-0 text-slate-400 hover:text-slate-100"
                                  >
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="size-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="w-[160px] border-slate-700 bg-slate-800 text-slate-300"
                                >
                                  <DropdownMenuItem className="cursor-pointer hover:bg-slate-700 hover:text-white">
                                    <Edit className="mr-2 size-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="cursor-pointer text-red-400 hover:bg-red-500/10 hover:text-red-400">
                                    <Trash2 className="mr-2 size-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
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
