import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(el => (
      <li key={el.id} className={styles.item}>
        <span className={el.isOnline ? styles.online : styles.offline} />
        <img className={styles.avatar} src={el.avatar} alt={el.name} />
        <h3>{el.name}</h3>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default FriendList;
