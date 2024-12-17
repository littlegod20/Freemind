import { LabelTypes, MoreOptions } from "@/utils/types";

export const clientTableHeaders = [
  "Company",
  "Created by",
  "Role",
  "First log in",
  "Last logged in",
  "Num of projects",
  "Contract expiration date",
];

export const clientTableValues = [
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

export const moreClientOptions: MoreOptions[] = [
  {
    label: "Edit client",
    path: "client-details",
  },
  {
    label: "Delete",
  },
];


export const clientTabs: LabelTypes[] = [
  {
    label: "Tab1",
    active: true,
    title: "Projects",
    buttonName: "Add project",
    child: "ww",
  },
  {
    label: "Tab2",
    active: false,
    title: "Applications",
    buttonName: "Add application",
  },
  {
    label: "Tab3",
    active: false,
    title: "Team",
    buttonName: "Add team member",
  },
];
