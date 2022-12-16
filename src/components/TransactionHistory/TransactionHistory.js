import PropTypes from 'prop-types';
import './TransactionHistory.css';
export const TransactionHistory = ({ items }) => {
  return (
    <section className="transactions">
      <table className="transaction-history">
        <thead className="table">
          <tr>
            <th>{'Type'.toUpperCase()}</th>
            <th>{'Amount'.toUpperCase()}</th>
            <th>{'Currency'.toUpperCase()}</th>
          </tr>
        </thead>

        <tbody>
          {items.map(el => (
            <tr key={el.id}>
              <td>{el.type.charAt(0).toUpperCase() + el.type.slice(1)}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
