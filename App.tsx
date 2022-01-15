import { ScrollView, StyleSheet, View } from "react-native";
import { ContactsMock, TransactionsMock } from "./mocks";
import Card from "./ui/Card/Card";
import Header from "./ui/Header/Header";
import TransactionList from "./ui/TransactionList/TransactionList";

export default function App() {
  return (
    <View>
      <Header />
      <Card />
      <TransactionList />
    </View>
  );
}
