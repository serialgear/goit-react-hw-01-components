import PropTypes from 'prop-types';
import './Statistics.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title && title.toUpperCase()}</h2>
      <ul className="stat-list">
        {stats.map(el => (
          <li
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
            key={el.id}
          >
            <span className="item-label">{el.label}</span>
            <span className="item-percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
  }),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
