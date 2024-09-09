import { createSlice } from '@reduxjs/toolkit';

export interface ILayoutState {
  isShowFull: boolean;
  isMobile: boolean;
}
const initialState = {
  isShowFull: true,
  isMobile: true
} as ILayoutState;
const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setIsShowFull(state, action) {
      state.isShowFull = action.payload;
    },
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    }
  }
});

export const { setIsShowFull, setIsMobile } = layoutSlice.actions;

export default layoutSlice.reducer;
