import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import boardReducer from './reducers/boardReducer';
import symbolReducer from './reducers/symbolReducer';
import taskReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  symbol: symbolReducer,
  board: boardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
