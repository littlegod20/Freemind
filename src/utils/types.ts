// import { ClientDetailsTypes } from "@/pages/ClientPages/clientTypes";
import { LucideIcon } from "lucide-react";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

export interface TableDetailsTypes {
  // users
  id: string;
  name?: string;
  role?: string;
  joined?: string;
  lastLogged?: string;
  aiTokensUsed?: string;
  aiTokensSessions?: string;
  palmTokensUsed?: string;
  palmSessions?: string;
  limitCall?: string;
  email?: string;
  inviteStatus?: string;
  expiryDate?: string;

  // prefixed prompts
  promptTitle?: string;
  prompt?: string;
  folder?: string;
  access?: string;

  // session details
  totalSessions?: string;

  // client details
  companyName?: string;
  contractExpiryDate?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  website?: string;
  firstLogged?: string;
  lastUpdate?: string;
  numberOfProjects?: string;
  modifiedBy?: { name: string; role: string };
  createdBy?: string;
}

export interface MoreOptions {
  label: string;
  path?: string;
  action?: () => void | ((val: number) => void);
  Icon?: LucideIcon;
}

export interface TableTypes {
  tableTitles: string[];
  titlesClassName?: ClassNameValue;
  tableDetails: TableDetailsTypes[] | null;
  detailsClassName?: ClassNameValue;
  moreOptions?: MoreOptions[];
  pagination?: boolean;
  tableClassName?: ClassNameValue;
  overAllContainerClassName?: ClassNameValue;
}

export interface CardWithFormTypes {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  buttonTitles?: MoreOptions[];
  className?: ClassNameValue;
  buttonLayout?: string;
  outClick?: boolean;
  onCancel?: () => void;
  submitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type LabelTypes = {
  label?: string;
  options?: string[];
  placeholder?: string;
  Icon?: LucideIcon;
  active?: boolean;
  title?: string;
  buttonName?: string;
  modalDetails?: Partial<CardWithFormTypes>;
};

export interface InputsTypes {
  data: LabelTypes[];
  layout?: "row" | "column";
  slice1?: number;
  slice2?: number;
  type?: string;
  defaultSelect?: boolean;
  className?: ClassNameValue;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DetailsTypes {
  statics: string[];
  details: TableDetailsTypes | null;
  slice1?: number;
  slice2?: number;
  modified?: boolean;
}

export interface EditContainerTypes {
  title: string;
  description?: string;
  image?: string;
  Button?: React.ReactNode;
  isUser?: boolean;
  border?: boolean;
  titleClassName?: ClassNameValue;
}

export interface HeaderTypes {
  title: string;
  description: string;
  Button?: React.ReactNode;
  back?: boolean;
}

export interface TabStyles {
  name: string;
  Icon: LucideIcon;
  activeTab: string;
  increaseDash: boolean;
  onNavigation: (val: string) => void;
}
