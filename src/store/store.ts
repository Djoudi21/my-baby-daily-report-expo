import {
  Action,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice.ts";
import { AuthRepository } from "../repositories/interfaces/authRepisotory.ts";

export type Dependencies = {
  authRepository: AuthRepository;
};

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const createAppStore = (
  dependencies: Dependencies,
  preloadedState?: Partial<ReturnType<typeof rootReducer>>
) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
        serializableCheck: {
          ignoredActions: [""],
        },
        preloadedState,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, Action>;
export type AppStore = ReturnType<typeof createAppStore>;
