import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { salveLogin } from '../redux/actions';
import { UserState } from '../types';

const loginData = {
  email: '',
  password: '',
};

function Login() {
  const [login, setLogin] = useState<UserState>(loginData);

  const dispatch = useDispatch();

  const { email, password } = login;

  const navigate = useNavigate();

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(salveLogin(login));
    navigate('/carteira');
  }

  return (
    <>
      <h1>TrybeWallet</h1>
      <form onSubmit={ handleSubmit }>
        <label>
          E-mail:
          {' '}
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            required
            onChange={ handleChange }
          />
        </label>
        <label>
          Senha:
          {' '}
          <input
            data-testid="password-input"
            name="password"
            value={ password }
            type="password"
            required
            onChange={ handleChange }
          />
        </label>
        <button disabled={ !(password.length >= 6 && /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) }>Entrar</button>
      </form>
    </>
  );
}

export default Login;
