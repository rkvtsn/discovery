import { createSlice } from '@reduxjs/toolkit';
import { openCardByState } from 'services/CardService';
import { RootState } from 'store';
import { TaskState } from './types';

const initialState: TaskState = {
  deck: [],
  active: [],
  discarded: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    openTask: (state: TaskState) => openCardByState(state),
  },
});

export const taskSelector = (state: RootState) => state.task;
export const { openTask } = taskSlice.actions;
export default taskSlice.reducer;
