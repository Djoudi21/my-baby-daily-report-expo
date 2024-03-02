import * as React from "react";
import { forwardRef, ReactNode } from "react";
import { Text, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { FieldError } from "react-hook-form";

interface Props extends TextInputProps {
  name: string;
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
  children?: ReactNode;
}
export const BaseTextInput = forwardRef<TextInput, Props>(
  (props: Props, ref) => {
    const { label, labelStyle, error, children, ...inputProps } = props;
    const borderStyle = () => {
      if (error) {
        return "border border-solid border-error";
      } else {
        return "border border-solid border-lavender focus:border-primary";
      }
    };

    return (
      <View className={"w-full gap-2"}>
        <View
          className={`${borderStyle()} rounded-3xl px-4 h-10 w-full flex items-center justify-center flex-col`}
        >
          {label && <Text className={`${labelStyle}`}>{label}</Text>}
          <View className={"flex flex-row justify-between w-full"}>
            <TextInput
              autoCapitalize="none"
              ref={ref}
              className={"w-4/5 h-full"}
              {...inputProps}
            />
            {children && children}
          </View>
        </View>
        <Text className={"text-error pl-4"}>{error && error.message}</Text>
      </View>
    );
  }
);
