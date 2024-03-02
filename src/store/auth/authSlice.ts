import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { register } from "./use-cases/register/register.ts";
import { login } from "./use-cases/login/login.ts";
import { logout } from "./use-cases/logout.ts";
import { errorMessageMapper } from "../../utils/errorMessageMapper.ts";

const initialState = {
  user: {
    email: "user.email@gmail.com",
    id: 0,
  },
  isLoggedIn: false,
  error: "",
  isLoading: false,
  tokens: {
    refreshToken: "",
    accessToken: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      if ("user" in action.payload.data) {
        state.user = action.payload.data.user;
      }
      if ("tokens" in action.payload) {
        state.tokens = {
          accessToken: action.payload.tokens.accessToken,
          refreshToken: action.payload.tokens.refreshToken,
        };
      }
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.error.message ?? "";
    });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = "";
      if ("user" in action.payload.data) {
        state.user = action.payload.data.user;
      }
      if ("tokens" in action.payload) {
        state.tokens = {
          accessToken: action.payload.tokens.accessToken,
          refreshToken: action.payload.tokens.refreshToken,
        };
      }
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = errorMessageMapper(action.error.message ?? "");
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.error = "";
      state.tokens = {
        refreshToken: "",
        accessToken: "",
      };
      state.isLoggedIn = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error.message ?? "";
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetErrorMessage } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => {
  return state.auth.isLoggedIn;
};

export const selectCurrentUser = (state: RootState) => {
  return state.auth.user;
};

export const selectAuthError = (state: RootState) => {
  return state.auth.error;
};

export const selectRefreshToken = (state: RootState) => {
  return state.auth.tokens.refreshToken;
};

export const selectAccessToken = (state: RootState) => {
  return state.auth.tokens.accessToken;
};
