"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ColorSetting {
  id: string;
  label: string;
  color: string;
}

const initialColors: ColorSetting[] = [
  { id: "auction", label: "AUCTION", color: "#000000" },
  { id: "available", label: "AVAILABLE", color: "#4eef17" },
  { id: "late", label: "LATE", color: "#d40000" },
  { id: "lien", label: "LIEN", color: "#a32525" },
  { id: "movingOut", label: "MOVING OUT", color: "#477bff" },
  { id: "pending", label: "PENDING", color: "#d6d400" },
  { id: "preLien", label: "PRE-LIEN", color: "#000000" },
  { id: "lockedOut", label: "LOCKED OUT", color: "#b30000" },
  { id: "rented", label: "RENTED", color: "#35ba58" },
  { id: "reserved", label: "RESERVED", color: "#d34800" },
  { id: "unavailable", label: "UNAVAILABLE", color: "#cacaca" },
];

export default function ColorSettings() {
  const [colors, setColors] = useState<ColorSetting[]>(initialColors);

  const handleColorChange = (id: string, newColor: string) => {
    setColors(colors.map((c) => (c.id === id ? { ...c, color: newColor } : c)));
  };

  const handleUpdate = () => {
    alert("Updated");
  };

  return (
    <div className="size-full p-4 lg:p-8">
      <div className="mx-auto size-full">
        <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-slate-800 p-6">
          <header className="mb-6">
            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent">
              Customize Unit Status Colors
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              These colors are used on the site map and grid view.
            </p>
          </header>

          <div className="mt-4 border-b border-slate-700/50" />

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {colors.map((setting, index) => (
              <motion.div
                key={setting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-medium text-slate-200">
                        {setting.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">
                          {setting.color.toUpperCase()}
                        </span>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="size-6 rounded-full border-2 border-slate-700/50 p-0 hover:border-slate-600"
                              style={{
                                backgroundColor: setting.color,
                              }}
                            >
                              <span className="sr-only">Pick a color</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto border-slate-700/50 bg-slate-800/95 p-3 backdrop-blur-sm"
                            align="end"
                          >
                            <HexColorPicker
                              color={setting.color}
                              onChange={(color) =>
                                handleColorChange(setting.id, color)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div
                      className="h-24 rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: setting.color }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button
              onClick={handleUpdate}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Update Settings
            </Button>
            <Button
              variant="outline"
              className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
