import { Dimensions, Text, View, Image } from "react-native";
import Card from "./ui/Card/Card";
import Header from "./ui/Header/Header";
import TransactionList from "./ui/TransactionList/TransactionList";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View>
      <Header />
      <Card />
      <TransactionList />
      <View
        style={{
          position: "absolute",
          top: height - 129,
          left: width - 75,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#68FFB6",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./assets/plus-icon.png")}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#8DE8FF",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./assets/minus-icon.png")}
          />
        </View>
      </View>
    </View>
  );
}
