// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { WALLET_DATA, EXPENSES_DATA, DELETE_EXPENSE } from '../actions';
import { RenderExpenses } from '../../types';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

function wallet(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case WALLET_DATA:
      return {
        ...state,
        currencies: action.currencies,
      };
    case EXPENSES_DATA:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            ...action.payload.expenses,
            id: state.expenses.length,
            exchangeRates: action.payload.data,
          },
        ],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((id: RenderExpenses) => id.id !== action.payload),
      };
    default:
      return state;
  }
}

export default wallet;
