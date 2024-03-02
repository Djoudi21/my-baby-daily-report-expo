import { createAppAsyncThunk } from "../../createAppThunk.ts";

export const logout = createAppAsyncThunk(
  "auth/logout",
  async (_, { extra: { authRepository } }) => {
    const res = await authRepository.logout();
    return res.json();
  }
);
