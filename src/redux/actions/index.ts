type LoginType = {
  email: string;
  password: string;
};

export const LOGIN_DATA = 'LOGIN_DATA';

export const salveLogin = (login: LoginType) => ({
  type: 'LOGIN_DATA',
  payload: login,
});
