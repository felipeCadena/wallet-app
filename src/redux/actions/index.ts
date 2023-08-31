import { Dispatch, UserState } from '../../types';

export const LOGIN_DATA = 'LOGIN_DATA';
export const WALLET_DATA = 'WALLET_DATA';
export const EXPENSES_DATA = 'EXPENSES_DATA';

export const salveLogin = (login: UserState) => ({
  type: 'LOGIN_DATA',
  payload: login,
});

export const salveCurrencies = (currencies: string[]) => ({
  type: 'WALLET_DATA',
  currencies,
});

export const salveExpenses = (data: object, expenses: object) => ({
  type: 'EXPENSES_DATA',
  payload: { expenses, data },
});

export function fetchCurrencies() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      const currencies = Object.keys(data);
      dispatch(salveCurrencies(currencies));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function fetchExpenses(expenses: object) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(salveExpenses(data, expenses));
    } catch (error: any) {
      console.log(error);
    }
  };
}
