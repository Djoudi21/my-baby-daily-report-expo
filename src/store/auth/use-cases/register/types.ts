import { User } from "../login/types.ts";

export interface RegisterUserResponse {
  data: {
    user: User;
    message: string;
    status: 201;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface NewUser {
  email: string;
  password: string;
}

export interface RegisterUserResponseError {
  data: {
    message: string;
    status: 409;
  };
}
