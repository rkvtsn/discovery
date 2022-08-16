import { createSlice } from '@reduxjs/toolkit';
import { openCardById, openCardByState } from 'services/CardService';
import { RootState } from 'store';
import { SymbolState, SymbolCard } from './types';

const deck: SymbolCard[] = [
  {
    id: '1.0',
    title: 'Символ 1',
    description: 'Описание 1',
    result: 'Результат 1',
    condition: 'Условие 1',
    options: [
      {
        text: 'Вариант А',
        linkTo: '1.1',
      },
      {
        text: 'Вариант Б',
        linkTo: '1.2',
      },
    ],
  },
  {
    id: '1.1',
    title: 'Символ 1',
    description: 'Описание 1.1',
    result: 'Результат 1.1',
  },
  {
    id: '1.2',
    title: 'Символ 1',
    description: 'Описание 1.2',
    result: 'Результат 1.2',
    condition: 'Условие 1.2',
  },
];

const initialState: SymbolState = {
  deck,
  active: [],
  discarded: [],
  current: null,
};

const symbolSlice = createSlice({
  name: 'symbol',
  initialState,
  reducers: {
    openRandomSymbol: (state: SymbolState) => openCardByState(state),
    openSymbolById: (state: SymbolState, payload) =>
      openCardById(state, payload.payload),
  },
});

export const symbolSelector = (state: RootState) => state.symbol;
export const { openRandomSymbol, openSymbolById } = symbolSlice.actions;
export default symbolSlice.reducer;
