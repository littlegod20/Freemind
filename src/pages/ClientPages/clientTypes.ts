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

// export interface ClientDetailsTypes {
//   companyName: string;
//   contractExpiryDate: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   website: string;
//   firstLogged: string;
//   lastUpdate: string;
//   numberOfProjects: string;
//   modifiedBy: { name: string; role: string };
//   createdBy: string;
// }