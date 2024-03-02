import { useState } from "react";

export const usePasswordHook = () => {
  const [passwordIconToDisplay, setPasswordIconToDisplay] = useState<
    "eye" | "eye-off"
  >("eye-off");

  const getIsPasswordVisible = () => {
    return passwordIconToDisplay !== "eye";
  };

  const handlePasswordIcon = () => {
    return passwordIconToDisplay === "eye"
      ? setPasswordIconToDisplay("eye-off")
      : setPasswordIconToDisplay("eye");
  };
  return {
    isPasswordVisible: getIsPasswordVisible(),
    passwordIconToDisplay,
    handlePasswordIcon,
  };
};
