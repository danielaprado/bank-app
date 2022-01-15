import { Image, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #e8edf2;
  border-radius: 8px;
`;

export const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;
