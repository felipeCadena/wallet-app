import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../types';
import { deleteExpenses } from '../redux/actions';

function Table() {
  const globalState = useSelector((state: ReduxState) => state.wallet);
  const dispatch = useDispatch();

  console.log(globalState.expenses);

  function handleDelete(id: number) {
    dispatch(deleteExpenses(id));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {globalState && globalState.expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button
                data-testid="delete-btn"
                id={ expense.id.toString() }
                onClick={ () => handleDelete(expense.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
