import { LucideIcon } from "lucide-react";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

export interface TableDetailsTypes {
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
}

export interface ClientDetailsTypes {
  companyName: string;
  contractExp: string;
  contactName: string;
  email: string;
  phoneNo: string;
  website: string;
  firstLogged: string;
  lastLogged: string;
  lastUpdate: string;
  modifiedBy: { name: string; role: string };
}

export interface MoreOptions {
  label: string;
  path?: string;
  action?: () => void;
  Icon?: LucideIcon;
}

export interface TableTypes {
  tableTitles: string[];
  tableDetails: TableDetailsTypes[];
  moreOptions: MoreOptions[];
  pagination?: boolean;
}

export interface CardWithFormTypes {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  buttonTitles?: MoreOptions[];
  className?: ClassNameValue;
  buttonLayout?: string;
  outClick?: boolean;
  // cancelButton?: boolean;
  onCancel?: () => void;
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
  details: TableDetailsTypes | ClientDetailsTypes | null;
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
  increaseDash:boolean
  onNavigation: (val: string) => void;
}
