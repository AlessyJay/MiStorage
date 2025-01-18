"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "79",
    description: "Perfect for personal storage needs",
    features: [
      "5' x 10' Storage Unit",
      "24/7 Access",
      "Basic Security",
      "Month-to-Month Rental",
      "Ground Floor Access",
    ],
  },
  {
    name: "Premium",
    price: "149",
    description: "Ideal for business storage",
    features: [
      "10' x 15' Storage Unit",
      "Climate Control",
      "Advanced Security",
      "Business Hour Access",
      "Insurance Options",
      "Loading Dock Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "Complete storage solution",
    features: [
      "20' x 20' Storage Unit",
      "Premium Security",
      "Climate Control",
      "24/7 Access",
      "Insurance Included",
      "Dedicated Support",
      "Multiple Units Option",
    ],
  },
];

export function Pricing() {
  return (
    <section className="relative overflow-hidden px-4 py-24" id="pricing">
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
            <span className="font-medium text-blue-400">Pricing</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Simple, transparent
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Choose the perfect storage solution for your needs with our flexible
            pricing options.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={`feature-card-hover relative overflow-hidden border-slate-800 bg-slate-900/50 ${
                  plan.popular ? "border-blue-500/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0">
                    <div className="rounded-bl-lg bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-slate-400">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-slate-300"
                      >
                        <Check className="mr-2 size-5 shrink-0 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
