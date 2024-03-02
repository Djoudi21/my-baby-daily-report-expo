import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
  resetErrorMessage,
  selectAuthError,
} from "../../store/auth/authSlice.ts";
import { login } from "../../store/auth/use-cases/login/login.ts";
import { PATH } from "../../utils/CONSTANTS.ts";

export const useLoginHook = (navigation: any) => {
  const dispatch = useAppDispatch();
  const responseError = useAppSelector(selectAuthError);

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));
  };

  const navigateToRegister = () => {
    navigation.push(PATH.register);
    dispatch(resetErrorMessage());
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    responseError,
    navigateToRegister,
  };
};
