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
    <section className="py-24 px-4 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-blue-500/10 rounded-full mb-8"
          >
            <span className="text-blue-400 font-medium">Pricing</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Simple, transparent
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect storage solution for your needs with our flexible
            pricing options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={`relative bg-slate-900/50 border-slate-800 feature-card-hover overflow-hidden ${
                  plan.popular ? "border-blue-500/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="text-xs font-medium bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-slate-300"
                      >
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300"
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
