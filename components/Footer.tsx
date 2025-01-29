"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <span className="gradient-text text-xl font-semibold">
                MI Storage
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Secure storage solutions for every need. Available 24/7 with
              top-notch security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Security", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Cookies", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 md:flex-row"
        >
          <p className="mb-4 text-sm text-slate-400 md:mb-0">
            © {new Date().getFullYear()} MI Storage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
              >
                <Icon className="size-5" />
                <span className="sr-only">Social Media</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
