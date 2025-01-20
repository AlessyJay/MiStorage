"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Box,
  Users,
  Globe,
  ChevronRight,
  Menu,
  LogOut,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    title: "Control Panel",
    icon: LayoutDashboard,
    href: "/admin",
    subItems: [
      { title: "Dashboard", href: "/admin/dashboard" },
      { title: "Todo List", href: "/admin/todo" },
    ],
  },
  {
    title: "Set up",
    icon: Settings,
    href: "/admin/setup",
    subItems: [
      { title: "Settings", href: "/admin/setup/settings" },
      { title: "Manager", href: "/admin/setup/manager" },
      { title: "Contact", href: "/admin/setup/contact" },
      { title: "Fees", href: "/admin/setup/fees" },
      { title: "Payments Processing", href: "/admin/setup/payments" },
      { title: "Tenant Protection", href: "/admin/setup/protection" },
      { title: "Tax Rates", href: "/admin/setup/tax" },
      { title: "Promotions", href: "/admin/setup/promotions" },
    ],
  },
  {
    title: "Units",
    icon: Box,
    href: "/admin/units",
    subItems: [
      { title: "Grid View", href: "/admin/units/grid" },
      { title: "Unit Types", href: "/admin/units/types" },
      { title: "List View", href: "/admin/units/list" },
      { title: "New Unit", href: "/admin/units/new" },
    ],
  },
  {
    title: "Customers",
    icon: Users,
    href: "/admin/customers",
    subItems: [
      { title: "All Customers", href: "/admin/customers" },
      { title: "Retail Sale", href: "/admin/customers/retail" },
      { title: "New Quote", href: "/admin/customers/quote" },
      { title: "Reservations", href: "/admin/customers/reservations" },
      { title: "Waiting List", href: "/admin/customers/waiting" },
      { title: "New Customer", href: "/admin/customers/new" },
      { title: "Import Customers", href: "/admin/customers/import" },
    ],
  },
  {
    title: "Manage Website",
    icon: Globe,
    href: "/admin/website",
    subItems: [
      { title: "Pages", href: "/admin/website/pages" },
      { title: "Image Library", href: "/admin/website/images" },
      { title: "Additional Services", href: "/admin/website/services" },
      { title: "Settings", href: "/admin/website/settings" },
    ],
  },
];

export function AdminNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const pathname = usePathname();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setExpandedItem(null);
    }
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        width: isCollapsed ? 80 : 280,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="flex h-screen flex-col gap-4 border-r border-slate-800 bg-slate-900 p-4"
    >
      <div className="flex h-12 items-center justify-between">
        <motion.div
          initial={false}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="flex size-8 items-center justify-center rounded-xl bg-blue-600">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-xl font-semibold text-transparent">
            MI Storage
          </span>
        </motion.div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className="text-slate-400 hover:text-white"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isCollapsed ? (
              <Menu className="size-5" />
            ) : (
              <ChevronRight className="size-5" />
            )}
          </motion.div>
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            item.subItems?.some((sub) => pathname === sub.href);
          return (
            <div key={item.title}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition-colors ${
                  isActive || expandedItem === item.title
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
                onClick={() =>
                  setExpandedItem(
                    expandedItem === item.title ? null : item.title,
                  )
                }
              >
                <div className="flex items-center gap-4">
                  <item.icon className="size-5" />
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isCollapsed ? 0 : 1,
                      transition: { duration: 0.2 },
                    }}
                    className="font-medium"
                  >
                    {item.title}
                  </motion.span>
                </div>
                {!isCollapsed && item.subItems && (
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      expandedItem === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </motion.div>
              <AnimatePresence>
                {!isCollapsed &&
                  expandedItem === item.title &&
                  item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-9 mt-2 flex flex-col gap-2"
                    >
                      {item.subItems.map((subItem) => {
                        const isSubItemActive = pathname === subItem.href;
                        return (
                          <Link key={subItem.title} href={subItem.href}>
                            <motion.div
                              whileHover={{ x: 4 }}
                              className={`rounded-lg px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-white ${
                                isSubItemActive
                                  ? "bg-blue-600/20 text-blue-400"
                                  : "text-slate-400 hover:text-white"
                              }`}
                            >
                              {subItem.title}
                            </motion.div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <Button
        variant="ghost"
        className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-white"
      >
        <LogOut className="size-5" />
        <motion.span
          initial={false}
          animate={{
            opacity: isCollapsed ? 0 : 1,
            transition: { duration: 0.2 },
          }}
          className="font-medium"
        >
          Logout
        </motion.span>
      </Button>
    </motion.nav>
  );
}
