"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import "@/components/shared/Editor.styles.css";

const EditorBlock = dynamic(() => import("@/components/shared/TextEditor"), {
  ssr: false,
});

export default function NewStorageAgreementPage() {
  const [title, setTitle] = useState("");
  const [editorData, setEditorData] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const handleSave = () => {
    console.log("Title:", title);
    console.log("Editor data:", editorData);
    // Here you would typically send this data to your backend
  };

  return (
    <motion.div
      className="size-full p-4 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mx-auto size-full">
        <div className="flex size-full flex-col overflow-hidden rounded-3xl bg-slate-800 p-6">
          <header className="mb-6">
            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent">
              New Storage Agreement
            </h1>
            <div className="mt-4 border-b border-slate-700/50" />
          </header>

          <ScrollArea className="flex-1 rounded-2xl">
            <motion.div {...fadeInUp}>
              <Card className="border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Create New Storage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Enter agreement title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-slate-700 text-white placeholder:text-slate-400"
                  />
                  <EditorBlock onChange={setEditorData} />
                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outline"
                      className="border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={handleSave}
                    >
                      Create
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
