import { createAppAsyncThunk } from "../../../createAppThunk.ts";
import { REQUEST_MESSAGES } from "../../../../utils/CONSTANTS.ts";
import { NewUser } from "./types.ts";

export const register = createAppAsyncThunk(
  "auth/register",
  async (payload: NewUser, { extra: { authRepository } }) => {
    const res = await authRepository.register(payload);
    if (res.status !== 201) {
      switch (res.status) {
        case 409:
          throw new Error(REQUEST_MESSAGES["409"]);
        default:
          throw new Error(REQUEST_MESSAGES["500"]);
      }
    }
    return await res.json();
  }
);
