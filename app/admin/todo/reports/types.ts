import { z } from "zod";

export const taskReportSchema = z.object({
  status: z.string(),
  createdBy: z.string(),
  dateRange: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
});

export type TaskReport = {
  id: string;
  dueDate: Date;
  completedAt: Date | null;
  name: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  status: "completed" | "pending" | "overdue";
};
