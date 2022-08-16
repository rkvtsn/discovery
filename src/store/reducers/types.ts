import { SymbolCard } from './types';

export interface Card {
  id: string;
  title: string;
  description: string;
}

export interface EventOption {
  text: string;
  linkTo?: string;
}

export interface SymbolCard extends Card {
  result: string;
  condition?: string;
  options?: EventOption[];
}

export enum TaskStatusEnum {
  NEW = 'NEW',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

export interface Task {
  id: string;
  text: string;
  status: TaskStatusEnum;
}

export interface TaskCard extends Card {
  tasks: Task[];
}

export interface Player {
  name: string;
  color: string;
}

/** STATES */

export interface DeckState<T extends Card> {
  deck: T[];
  active: T[];
  discarded: T[];
  current?: SymbolCard | null;
}

export interface TaskState extends DeckState<TaskCard> {}
export interface SymbolState extends DeckState<SymbolCard> {}
export interface BoardState {
  players: Player[];
  daysLeft: number;
}
