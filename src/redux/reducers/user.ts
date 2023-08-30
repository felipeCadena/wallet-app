// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o e-mail da pessoa usuária
    password: '',
  },
};

function user(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default user;
