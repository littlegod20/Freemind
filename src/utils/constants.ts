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
