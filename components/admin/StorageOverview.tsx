"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function StorageOverview() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.2)");
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

        new Chart(chartRef.current, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Occupancy Rate",
                data: [75, 82, 80, 85, 88, 87, 92],
                fill: true,
                backgroundColor: gradient,
                borderColor: "#8B5CF6",
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: "#8B5CF6",
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
      }
    }
  }, []);

  return (
    <Card className="border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium text-white">
          Storage Overview
        </CardTitle>
        <Tabs defaultValue="7d">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="7d">7d</TabsTrigger>
            <TabsTrigger value="14d">14d</TabsTrigger>
            <TabsTrigger value="30d">30d</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <canvas ref={chartRef} />
      </CardContent>
    </Card>
  );
}
