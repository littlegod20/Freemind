import {
  ChartNoAxesColumn,
  Settings,
  Layers,
  Mail,
  User,
  UserPlus,
  Users,
  Link,
  Calendar,
} from "lucide-react";
import { LabelTypes } from "./types";

export const dashTabs = [
  {
    name: "Users",
    icon: Users,
  },
  {
    name: "Clients",
    icon: UserPlus,
  },
  {
    name: "Invitations",
    icon: Mail,
  },
  {
    name: "Analytics",
    icon: ChartNoAxesColumn,
  },
  {
    name: "Prefixed Prompts",
    icon: Layers,
  },
  {
    name: "Invite Mail Settings",
    icon: Settings,
  },
  {
    name: "Profile Settings",
    icon: User,
  },
];



export const invitationTitles = [
  "Name",
  "Email",
  "Role",
  "Invite Status",
  "Expires at",
];

export const invtationDetails = [
  {
    name: "Alex Johnson",
    email: "alex.johnson@emailprovider.com",
    role: "General user",
    inviteStatus: "expired",
    expiresAt: "2023/01/08",
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@emailprovider.com",
    role: "General user",
    inviteStatus: "expired",
    expiresAt: "2023/01/08",
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@emailprovider.com",
    role: "General user",
    inviteStatus: "expired",
    expiresAt: "2023/01/08",
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@emailprovider.com",
    role: "General user",
    inviteStatus: "expired",
    expiresAt: "2023/01/08",
  },
];



export const moreInviteOptions = [
  {
    label: "Resend invitation",
  },
  {
    label: "Delete",
  },
];

export const userDetailStatics = [
  "Full name",
  "Email",
  "Role",
  "Joined at",
  "Last logged in",
  "Open AI total sessions",
  "Palm total tokens used",
  "Palm total tokens used",
  "Palm total sessions",
];

export const clientDetailStatics = [
  "Company name",
  "Contract expiration date",
  "Contact name",
  "Email",
  "Phone number",
  "Website",
  "First log in",
  "Last logged in",
  "Last Update",
  "Modified by",
];

export const data: LabelTypes[] = [
  {
    label: "First name",
    placeholder: "eg. John",
  },
  {
    label: "Last name",
    placeholder: "eg. Doe",
  },
  {
    label: "Email Address",
    placeholder: "eg. johndoe@gmail.com",
  },
  {
    label: "Limit calls / month",
    options: ["1000", "2000", "3000"],
    placeholder: "Select number of limit calls per month for this user.",
  },
  {
    label: "Role",
    options: ["Consultant", "General user", "Stragegist"],
  },
  {
    label: "Company name",
    placeholder: "Enter company name",
  },
  {
    label: "Website",
    placeholder: "Insert website link",
    Icon: Link,
  },
  {
    label: "Contract expiry date",
    placeholder: "Enter date",
    Icon: Calendar,
  },
];
