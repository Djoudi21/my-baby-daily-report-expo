import { GestureResponderEvent, Pressable, Text } from "react-native";
import React from "react";

interface Props {
  label: string;
  handlePress: (event: GestureResponderEvent) => void;
}
export default function BaseButton({ handlePress, label }: Props) {
  return (
    <Pressable onPress={handlePress}>
      <Text>{label}</Text>
    </Pressable>
  );
}
