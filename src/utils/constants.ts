import {
  ChartNoAxesColumn,
  Settings,
  Layers,
  Mail,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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
