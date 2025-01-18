"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function SalesCharts() {
  const lastMonthChartRef = useRef<HTMLCanvasElement>(null);
  const lastWeekChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (lastMonthChartRef.current && lastWeekChartRef.current) {
      const lastMonthChart = new Chart(lastMonthChartRef.current, {
        type: "line",
        data: {
          labels: Array.from({ length: 30 }, (_, i) => i + 1),
          datasets: [
            {
              label: "Sales",
              data: Array.from(
                { length: 30 },
                () => Math.floor(Math.random() * 45) + 15,
              ),
              fill: true,
              backgroundColor: "rgba(168, 85, 247, 0.1)",
              borderColor: "rgba(168, 85, 247, 0.5)",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
              },
            },
          },
        },
      });

      const lastWeekChart = new Chart(lastWeekChartRef.current, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Sales",
              data: Array.from(
                { length: 7 },
                () => Math.floor(Math.random() * 45) + 15,
              ),
              fill: true,
              backgroundColor: "rgba(234, 179, 8, 0.1)",
              borderColor: "rgba(234, 179, 8, 0.5)",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
              },
            },
          },
        },
      });

      return () => {
        lastMonthChart.destroy();
        lastWeekChart.destroy();
      };
    }
  }, []);

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div variants={item}>
        <Card className="border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Last Month Sales
              <span className="ml-2 text-2xl font-bold text-purple-400">
                $40,250
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <canvas ref={lastMonthChartRef} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Last Week Sales
              <span className="ml-2 text-2xl font-bold text-yellow-400">
                $10,250
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <canvas ref={lastWeekChartRef} />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
