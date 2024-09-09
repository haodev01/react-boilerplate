import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: string | number;
  email: string;
}
export interface IAuthState {
  user: IUser;
  accessToken: string;
}
const defaultInitialState: IAuthState = {
  user: {
    id: '',
    email: ''
  },
  accessToken: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultInitialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    }
  }
});

export const { setUser, setAccessToken } = authSlice.actions;

export const getUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
