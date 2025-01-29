"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-300"
        >
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 border-slate-700 bg-slate-800 text-slate-300"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 border-slate-700 bg-slate-800 text-slate-300"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 border-slate-700 bg-slate-800 text-slate-300"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
