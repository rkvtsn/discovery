import { Card } from 'store/reducers/types';
import { DeckState } from '../store/reducers/types';

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

interface OpenCardResult<T extends Card> {
  deck: T[];
  card: T | null;
}

export function openCard<T extends Card>(deck: T[]): OpenCardResult<T> {
  if (!deck.length) return { deck, card: null };
  const cardIndex = randomInt(0, deck.length - 1);
  const card = deck[cardIndex];
  return {
    deck: deck.filter(({ id }) => id !== card.id),
    card,
  };
}

export function openCardById<T extends Card>(state: DeckState<T>, id: string) {
  const { deck } = state;
  const resultCard = deck.find((card: T) => card.id === id);
  if (!resultCard) return state;
  return swapCard(state, deck, resultCard);
}

export function swapCard<T extends Card>(
  state: DeckState<T>,
  deck: T[],
  card: T | null
) {
  if (!card) return state;
  return {
    deck,
    active: [...state.active, card],
    discarded: [...state.discarded, card],
    current: card,
  };
}

export function openCardByState<T extends Card>(state: DeckState<T>) {
  const { deck, card } = openCard(state.deck);
  return swapCard(state, deck, card);
}

export default {
  openCard,
};
