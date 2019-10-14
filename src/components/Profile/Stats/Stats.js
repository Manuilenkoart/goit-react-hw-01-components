import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ stats }) => (
  <ul className={styles.stats}>
    <li className={styles.item}>
      <span>followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span>views</span>
      <span>{stats.views}</span>
    </li>
    <li className={styles.item}>
      <span>likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
);

Stats.propTypes = {
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};
export default Stats;
