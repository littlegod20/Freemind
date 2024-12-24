import { TableDetailsTypes } from "@/utils/types";

export const prefixedPrompts: TableDetailsTypes[] = [
  {
    promptTitle: "Welcome Message",
    prompt: "Welcome to the application!",
    folder: "General",
    access: "Public",
  },
  {
    promptTitle: "Error Notification",
    prompt: "An error has occurred. Please try again.",
    folder: "Notifications",
    access: "Private",
  },
  {
    promptTitle: "Daily Reminder",
    prompt: "Don't forget to check your tasks for today.",
    folder: "Reminders",
    access: "Public",
  },
  {
    promptTitle: "System Update",
    prompt: "The system will be updated at midnight.",
    folder: "System",
    access: "Admin",
  },
];
