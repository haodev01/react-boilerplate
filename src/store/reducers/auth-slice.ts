import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id: string | number;
  email: string;
}
export interface IAuthState {
  user: IUser;
  accessToken: string;
  gameInfo: Record<string, string | number>;
}
const defaultInitialState: IAuthState = {
  user: {
    id: "",
    email: "",
  },
  gameInfo: {},
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultInitialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setGameInfo(state, action: PayloadAction<Record<string, string | number>>) {
      state.gameInfo = action.payload;
    },
  },
});

export const { setUser, setAccessToken, setGameInfo } = authSlice.actions;

export const getUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
