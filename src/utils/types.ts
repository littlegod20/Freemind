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
}

export interface TableTypes {
  tableTitles: string[];
  tableDetails: TableDetailsTypes[];
  moreOptions: MoreOptions[];
}
