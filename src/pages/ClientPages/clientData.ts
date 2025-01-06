import { LabelTypes, MoreOptions } from "@/utils/types";
import { ClientDetailsTypes } from "./clientTypes";

export const clientTableHeaders = [
  "Company",
  "Created by",
  "Role",
  "First log in",
  "Last logged in",
  "Num of projects",
  "Contract expiration date",
];

export const clientTableValues: Partial<ClientDetailsTypes>[] = [
  {
    companyName: "Alex Johnson",
    createdBy: "Alex Johnson",
    role: "General user",
    firstLogged: "2023/01/08",
    lastLogged: "2023/01/08",
    numberOfProjects: "4",
    contractExpiryDate: "2023/01/08",
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
  },
  {
    label: "Tab2",
    active: false,
  },
  {
    label: "Tab3",
    active: false,
  },
];
