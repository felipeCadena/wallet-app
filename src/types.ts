import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserState = {
  email: string;
  password: string;
};

export type WalletState = {
  currencies: string[],
  expenses: object[],
  editor: boolean;
  idToEdit: number;
};

export type ReduxState = {
  user: UserState,
  wallet: WalletState,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
