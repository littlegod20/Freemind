import { LucideIcon } from "lucide-react";
import React from "react";

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

interface MoreOptions {
  label: string;
  path?: string;
  // fn(val: string): void;
  // fn(): void;
}

export interface TableTypes {
  tableTitles: string[];
  tableDetails: TableDetailsTypes[];
  moreOptions: MoreOptions[];
  pagination?: boolean;
}

export interface CardWithFormTypes {
  title: string;
  description?: string;
  children: React.ReactNode;
  buttonTitles?: string[];
}

export type LabelTypes = {
  label?: string;
  placeholder?: string;
  options?: string[];
};

export interface InputsTypes {
  data: LabelTypes[];
  layout?: "row" | "column";
  slice1?: number;
  slice2?: number;
  type?: string;
  defaultSelect?: boolean;
  Icon?:LucideIcon
}

export interface DetailsTypes {
  statics: string[];
  details: TableDetailsTypes | null;
  slice1?: number;
  slice2?: number;
}

export interface EditContainerTypes {
  title: string;
  description?: string;
  image?: string;
  Button?: React.ReactNode;
  isUser?: boolean;
  border?: boolean;
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
  onNavigation: (val: string) => void;
}
