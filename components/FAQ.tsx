"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What sizes of storage units do you offer?",
    answer:
      "We offer a variety of storage unit sizes to meet your needs, ranging from small 5x5 units (perfect for a few boxes) to large 10x30 units (ideal for household contents). Our team can help you determine the best size for your specific storage requirements.",
  },
  {
    question: "Is there 24-hour access to the storage units?",
    answer:
      "Yes, we provide 24/7 access to your storage unit. Our facility is equipped with secure keypad entry and ample lighting to ensure you can access your belongings whenever you need them, day or night.",
  },
  {
    question: "Are the storage units climate-controlled?",
    answer:
      "We offer both climate-controlled and standard units. Climate-controlled units maintain a consistent temperature and humidity level, which is ideal for sensitive items like electronics, wood furniture, and important documents.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We take security seriously. Our facility features 24/7 video surveillance, secure gated access, individual unit alarms, and on-site management. We also offer insurance options for additional peace of mind.",
  },
  {
    question: "Do you offer moving supplies?",
    answer:
      "Yes, we have a wide range of moving and packing supplies available for purchase on-site. This includes boxes, tape, bubble wrap, furniture covers, and more to ensure your items are well-protected.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block rounded-full bg-blue-500/10 px-6 py-2"
          >
            <span className="font-medium text-blue-400">FAQ</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Find answers to common questions about our storage solutions and
            services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen
          ? "rgba(30, 41, 59, 0.5)"
          : "rgba(30, 41, 59, 0)",
      }}
      className="overflow-hidden rounded-lg border border-slate-700"
    >
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "rgba(30, 41, 59, 1)"
            : "rgba(30, 41, 59, 0.5)",
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between p-4"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-5 text-blue-400" />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4 text-slate-300">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
