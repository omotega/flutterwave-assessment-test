export interface accountModel {
  accountName: string;
  accountNumber?: string;
  dateOfBirth: {
    month: string;
    date: number;
    year: number;
  };
  accountType: string;
  balance: number;
}

