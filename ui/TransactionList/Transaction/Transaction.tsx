import { Text } from "react-native";
import {
  Transaction as TransactionModel,
  TransactionType,
} from "../../../models";
import * as Styled from "./Transaction.styles";

const Transaction = ({
  transaction,
}: {
  transaction: TransactionModel;
}): JSX.Element => {
  return (
    <Styled.Container>
      {transaction.type === TransactionType.CREDIT ? (
        <Styled.Icon source={require("../../../assets/credit-icon.png")} />
      ) : (
        <Styled.Icon source={require("../../../assets/debit-icon.png")} />
      )}

      <Text style={{ fontSize: 18 }}>{transaction.description}</Text>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        {`${transaction.amount} ${transaction.currency}`}
      </Text>
    </Styled.Container>
  );
};

export default Transaction;
