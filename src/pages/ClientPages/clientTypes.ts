import { LabelTypes, MoreOptions } from "@/utils/types";

export interface DataObjectTypes {
  name: string;
  role?: string;
  appStatus?: string;
  appDate?: string;
}

export interface TabChildContentsTypes {
  modalChildren?: React.ReactNode;
  border?: boolean;
  staticData?: LabelTypes[];
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  moreOptions?: MoreOptions[];
  tabNumber?:number;
  childIndex?:number;
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