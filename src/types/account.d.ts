export interface accountModel {
  accountName: string;
  accountNumber?: number;
  dateOfBirth: {
    month: string;
    date: number;
    year: number;
  };
  accountType: string;
  balance: number;
}
