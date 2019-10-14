import React from 'react';
import T from 'prop-types';
import styles from './Styles.module.css';

const Stats = ({ title, statsList }) => (
  <section className={styles.statsSection}>
    {title && <h2>{title}</h2>}
    <ul className={styles.statList}>
      {statsList.map(el => (
        <li className={styles.item} key={el.id}>
          {el.label}
          <span>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
export default Stats;
Stats.propTypes = {
  title: T.string.isRequired,
  statsList: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.string.isRequired,
    }),
  ).isRequired,
};
