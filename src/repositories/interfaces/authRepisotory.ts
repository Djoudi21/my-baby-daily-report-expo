import { NewUser } from "../../store/auth/use-cases/register/types.ts";
import { Credentials } from "../../store/auth/use-cases/login/types.ts";

export interface AuthRepository {
  register: (user: NewUser) => Promise<any>;
  login: (credentials: Credentials) => Promise<any>;
  logout: () => Promise<any>;
}
