import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ExpensesData = {
  ask: string;
  // bid: string;
  code: string;
  // codein: string;
  // create_date: string;
  // high: string;
  // low: string;
  // name: string;
  // pctChange: string;
  // timestamp: string;
  // varBid: string;
};

export type UserState = {
  email: string;
  password: string;
};

export type RenderExpenses = {
  id: number,
  value: number;
  currency: number;
  method: string;
  tag: string;
  description: string;
};

export type WalletState = {
  currencies: string[],
  expenses: [{
    id: number,
    value: number;
    currency: number;
    method: string;
    tag: string;
    description: string;
    exchangeRates: [{
      ask: number;
      name: string;
    }];
  }],
  editor: boolean;
  idToEdit: number;
};

export type ReduxState = {
  user: UserState,
  wallet: WalletState,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
