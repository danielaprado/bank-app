import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
import * as Styled from "./Header.styles";

const Header = (): JSX.Element => {
  return (
    <Styled.Container>
      <TouchableHighlight
        onPress={() => Alert.alert("abre menu")}
        underlayColor="white"
      >
        <View
          style={{
            width: 30,
            height: 30,
          }}
        >
          <Styled.Title>...</Styled.Title>
        </View>
      </TouchableHighlight>
      <Styled.Title>MY ACCOUNT</Styled.Title>
      <TouchableHighlight
        onPress={() => Alert.alert("abre perfil")}
        underlayColor="white"
      >
        <Styled.Avatar source={require("../../assets/monstro.png")} />
      </TouchableHighlight>
    </Styled.Container>
  );
};

export default Header;
