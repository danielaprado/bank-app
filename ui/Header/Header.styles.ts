import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const Avatar = styled(Image)`
  width: 30px;
  height: 30px;
`;
