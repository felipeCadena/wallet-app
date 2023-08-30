// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  wallet: {
    currencies: [], // array de string
    expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica se uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
  },
};

function wallet(state = INITIAL_STATE, action: AnyAction) {
  return state;
}

export default wallet;
