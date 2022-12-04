import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    getHello: (state) => {
      return state;
    },
  },
});

export const { getHello } = appSlice.actions;

export default appSlice.reducer;
