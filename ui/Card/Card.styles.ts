import { Dimensions, Image, View } from "react-native";
import styled from "styled-components";

const { width } = Dimensions.get("window");

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(View)`
  align-items: center;
  justify-content: center;
  width: ${width};
`;

export const Card = styled(Image)`
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 200px;
  border-radius: 16px;
  margin-bottom: 32px;
`;
