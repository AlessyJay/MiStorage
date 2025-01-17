"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Tech Entrepreneur",
    content:
      "The security features and accessibility have transformed how we manage our business inventory. MI Storage has been instrumental in our growth.",
    image:
      "https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sarah Martinez",
    role: "Interior Designer",
    content:
      "As someone who values aesthetics and organization, I'm impressed by the cleanliness and modern approach. The climate-controlled units are perfect for my valuable pieces.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Lopez",
    role: "E-commerce Owner",
    content:
      "The 24/7 access and state-of-the-art security give me peace of mind. It's more than storage - it's a business solution that grows with us.",
    image:
      "https://images.pexels.com/photos/10039861/pexels-photo-10039861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily Parker",
    role: "Art Curator",
    content:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    image:
      "https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length,
    );
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute left-1/4 top-0 size-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />

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
            <span className="font-medium text-blue-400">Testimonials</span>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Our Customers
            <span className="gradient-text"> Are Saying</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Join thousands of satisfied customers who trust MI Storage with
            their valuable belongings.
          </p>
        </motion.div>

        <div className="relative h-[600px] md:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-4xl"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Card className="border-slate-700/50 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:p-12">
                  <div className="grid items-center gap-8 md:grid-cols-[1fr,1.5fr] md:gap-12">
                    <div className="group relative aspect-square overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 transition-opacity duration-500 group-hover:opacity-75" />
                      <Image
                        src={testimonials[currentIndex].image || "pcitures"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="size-full object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 size-20 rounded-full bg-blue-500/10 blur-2xl" />
                      <div className="absolute -left-2 -top-2 size-20 rounded-full bg-purple-500/10 blur-2xl" />
                    </div>
                    <div className="space-y-6">
                      <Quote className="size-12 text-blue-400/50" />
                      <blockquote className="text-2xl font-medium leading-relaxed text-slate-100 md:text-3xl">
                        {testimonials[currentIndex].content}
                      </blockquote>
                      <div className="flex items-center space-x-4 border-t border-slate-700/50 pt-6">
                        <Avatar className="size-14 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-slate-900">
                          <AvatarImage src={testimonials[currentIndex].image} />
                          <AvatarFallback>
                            {testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-lg font-semibold text-transparent">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-blue-400">
                            {testimonials[currentIndex].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-12 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-1.5 bg-slate-600 hover:bg-blue-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
