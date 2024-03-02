import { Animated, Text, ViewProps } from "react-native";
import { useToasterHook } from "../../hooks/use-toaster.hook.ts";
import { ReactNode, useEffect, useRef } from "react";

interface Props extends ViewProps {
  message: string;
  children?: ReactNode;
}
export function BaseToaster({ message, children, ...rest }: Props) {
  const { displayToaster } = useToasterHook();
  const slideAnim = useRef(new Animated.Value(-1000)).current; // Initial value for opacity: 0

  useEffect(() => {
    if (message.length > 0 && displayToaster) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [slideAnim, message, displayToaster]);

  return message.length > 0 && displayToaster ? (
    <Animated.View
      className={
        "absolute p-4 w-full flex flex-row items-center justify-center rounded-lg bg-bright"
      }
      style={{
        shadowColor: "#212121", // Darker shadow color
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
        transform: [
          { translateY: slideAnim }, // Apply translateY transformation based on slideAnim value
        ],
      }}
      {...rest}
    >
      {children}
      <Text className={"text-error ml-2 text-center"}>{message}</Text>
    </Animated.View>
  ) : null;
}
