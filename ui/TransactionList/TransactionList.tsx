import React from "react";
import { ScrollView, View } from "react-native";
import { TransactionsMock } from "../../mocks";
import Transaction from "./Transaction/Transaction";
import * as Styled from "./TransactionList.styles";

const TransactionList = (): JSX.Element => {
  const transactions = TransactionsMock;
  return (
    <>
      <Styled.Container>TRANSACTIONS</Styled.Container>
      <View style={{ paddingBottom: 850 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {transactions.map((transaction) => (
            <View key={transaction.id}>
              <Transaction transaction={transaction} />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default TransactionList;
