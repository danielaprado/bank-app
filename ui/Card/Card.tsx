import React from "react";
import { ScrollView } from "react-native";
import * as Styled from "./Card.styles";

const Card = (): JSX.Element => {
  return (
    <Styled.Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Styled.CardContainer>
          <Styled.Card source={require("../../assets/blue-green-card.png")} />
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.Card
            source={require("../../assets/orange-purple-card.png")}
          />
        </Styled.CardContainer>
      </ScrollView>
    </Styled.Container>
  );
};

export default Card;
