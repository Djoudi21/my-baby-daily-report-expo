import { useState } from "react";

export function useToasterHook() {
  const [displayToaster, setDisplayToaster] = useState(true);

  const showToast = () => {
    setDisplayToaster(true);

    setTimeout(() => {
      setDisplayToaster(false);
    }, 3000);
  };
  return {
    displayToaster,
    showToast,
  };
}
