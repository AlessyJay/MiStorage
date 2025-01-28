/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";

interface EditorBlockProps {
  onChange: (data: any) => void;
}

const EditorBlock: React.FC<EditorBlockProps> = ({ onChange }) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: List,
          image: {
            class: Image,
            config: {
              uploader: {
                uploadByFile() {
                  // This is a mock function. In a real app, you'd upload the file to your server or a third-party service.
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve({
                        success: 1,
                        file: {
                          url: "https://picsum.photos/200/300",
                        },
                      });
                    }, 1000);
                  });
                },
              },
            },
          },
          quote: Quote,
          inlineCode: InlineCode,
        },
        onChange: async () => {
          const data = await editor.save();
          onChange(data);
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, [onChange]);

  return (
    <div
      id="editorjs"
      className="min-h-[300px] rounded-md border border-slate-600 bg-slate-700 p-4 text-white"
    />
  );
};

export default EditorBlock;
