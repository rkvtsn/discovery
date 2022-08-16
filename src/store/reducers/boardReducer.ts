import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { DAYS_LEFT_DEFAULT } from './constants';
import { BoardState } from './types';

const initialState: BoardState = {
  players: [],
  daysLeft: 0,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    init: (state: BoardState) => {
      state.daysLeft = DAYS_LEFT_DEFAULT;
    },
  },
});

export const boardSelector = (state: RootState) => state.board;
export const { init } = boardSlice.actions;
export default boardSlice.reducer;
