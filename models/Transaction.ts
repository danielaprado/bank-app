import { TransactionCurrency, TransactionType } from "./constants/Constants";
import { Contact } from "./Contact";

export interface Transaction {
  id: string;
  type: TransactionType;
  date: string;
  description: string;
  amount: number;
  currency: TransactionCurrency;
  source?: Contact;
  destination?: Contact;
}
