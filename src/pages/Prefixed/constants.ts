import { TableDetailsTypes } from "@/utils/types";

export const prefixedPrompts: TableDetailsTypes[] = [
  {
    id: "0",
    promptTitle: "Welcome Message",
    prompt: "Welcome to the application!",
    folder: "General",
    access: "Public",
  },
  {
    id: "1",
    promptTitle: "Error Notification",
    prompt: "An error has occurred. Please try again.",
    folder: "Notifications",
    access: "Private",
  },
  {
    id: "2",
    promptTitle: "Daily Reminder",
    prompt: "Don't forget to check your tasks for today.",
    folder: "Reminders",
    access: "Public",
  },
  {
    id: "3",
    promptTitle: "System Update",
    prompt: "The system will be updated at midnight.",
    folder: "System",
    access: "Admin",
  },
];
