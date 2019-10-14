import React from 'react';
import T from 'prop-types';

import styles from './Description.module.css';

const Description = ({ imageUrl, alt, userName, userTag, userLocation }) => (
  <div className={styles.description}>
    <img src={imageUrl} alt={alt} width={100} />
    <p>{userName}</p>
    <p>@{userTag}</p>
    <p>{userLocation}</p>
  </div>
);
Description.defaultProps = {
  alt: 'user img',
};
Description.propTypes = {
  imageUrl: T.string.isRequired,
  alt: T.string,
  userName: T.string.isRequired,
  userTag: T.string.isRequired,
  userLocation: T.string.isRequired,
};
export default Description;
