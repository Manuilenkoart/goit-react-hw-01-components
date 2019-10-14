import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import user from './Profile/user.json';
import stats from './Stats/statsList';
import styles from './App.module.css';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transaction.json';

const App = () => (
  <div className={styles.container}>
    <Profile user={user} />
    <Stats title="Upload stats" statsList={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
