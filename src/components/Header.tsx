import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header() {
  const { user } = useSelector((state: ReduxState) => state);

  return (
    <div>
      <img src="" alt="" />
      <p data-testid="email-field">
        E-mail:
        {' '}
        {user.email}
      </p>
      <div data-testid="total-field">
        Despesa Total: 0
        {' '}
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </div>
  );
}

export default Header;
