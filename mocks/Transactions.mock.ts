import { Contact } from "./../models/Contact";
import {
  EntityType,
  TransactionCurrency,
  TransactionType,
} from "../models/constants/Constants";
import { Transaction } from "../models/Transaction";
import {
  guidGenerator,
  randomDateGenerator,
  randomNumberGenerator,
} from "../utils";

import { ContactsMock } from "./Contacts.mock";

const transactionGenerator = () => {
  const transactions: Transaction[] = [];
  let contact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    avatar: "",
  };

  for (let i = 0; i < 20; i++) {
    contact = ContactsMock[randomNumberGenerator(0, ContactsMock.length - 1)];
    let transaction = {
      id: guidGenerator(EntityType.TRANSACTION),
      type: i % 3 === 0 ? TransactionType.DEBIT : TransactionType.CREDIT,
      date: randomDateGenerator(
        "2021-01-17T00:00:00.000Z",
        "2022-01-17T00:00:00.000Z"
      ),
      description:
        i % 3 === 0
          ? `Recebeu de ${contact.firstName}`
          : `Pagou a ${contact.firstName}`,
      amount: randomNumberGenerator(1, 150),
      currency: TransactionCurrency.EUR,
      source: i % 3 === 0 ? contact : undefined,
      destination: i % 3 === 0 ? undefined : contact,
    };
    transactions.push(transaction);
  }
  return transactions;
};

export const TransactionsMock: Transaction[] = transactionGenerator();
