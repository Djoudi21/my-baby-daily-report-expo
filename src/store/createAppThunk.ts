import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, Dependencies, RootState } from "./store.ts";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
