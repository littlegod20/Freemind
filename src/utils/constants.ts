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

export const usersTitles = [
  "Name",
  "Role",
  "Joined at",
  "Last logged in",
  "Open AI total tokens used",
  "Open AI total sessions",
  "Palm total tokens used",
  "Palm total sessions",
  "Limit calls / month",
];

export const usersDetails = [
  {
    name: "Alex Johnson",
    role: "General user",
    joined: "2023/01/08",
    lastLogged: "2023/01/08",
    aiTokensUsed: "2048 tokens",
    aiTokensSessions: "60",
    palmTokensUsed: "2048 tokens",
    palmSessions: "1000",
    limitCall: "1000",
  },
  {
    name: "Maria Rodriguez",
    role: "Consultant",
    joined: "2023/02/09",
    lastLogged: "2023/02/09",
    aiTokensUsed: "100 tokens",
    aiTokensSessions: "500",
    palmTokensUsed: "100 tokens",
    palmSessions: "500",
    limitCall: "500",
  },
  {
    name: "Chris Thompson",
    role: "Strategist",
    joined: "2023/02/09",
    lastLogged: "2023/02/09",
    aiTokensUsed: "30 tokens",
    aiTokensSessions: "1000",
    palmTokensUsed: "30 tokens",
    palmSessions: "1000",
    limitCall: "1000",
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

export const clientTitles = [
  "Company",
  "Created by",
  "Role",
  "First log in",
  "Last logged in",
  "Num of projects",
  "Contract expiration date",
];

export const clientDetails = [
  {
    name: "Alex Johnson",
    createdBy: "Alex Johnson",
    role: "General user",
    firstLog: "2023/01/08",
    lastLog: "2023/01/08",
    numProjects: "4",
    contractExp: "2023/01/08",
  },
];

export const moreClientOptions = [
  {
    label: "Edit client",
  },
  {
    label: "Delete",
  },
];

export const moreUserOptions = [
  {
    label: "Edit user",
    path: "user-details",
  },
  {
    label: "Remove access",
    // fn: () => console.log("removed"),
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

export const statics = [
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
