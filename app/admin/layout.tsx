import { AdminNav } from "@/components/admin/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-slate-900">
      <AdminNav />
      {children}
    </div>
  );
};

export default layout;
