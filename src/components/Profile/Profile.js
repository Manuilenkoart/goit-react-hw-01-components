import React from 'react';
import T from 'prop-types';
import Description from './Description/Description';
import Stats from './Stats/Stats';

const Profile = ({ user }) => (
  <div className="profile">
    <Description
      imageUrl={user.avatar}
      userName={user.name}
      userTag={user.tag}
      userLocation={user.location}
    />
    <Stats stats={user.stats} />
  </div>
);
Profile.propTypes = {
  user: T.shape({
    avatar: T.objectOf(T.string).isRequired,
    name: T.objectOf(T.string).isRequired,
    tag: T.objectOf(T.string).isRequired,
    location: T.objectOf(T.string).isRequired,

    stats: T.objectOf(T.number).isRequired,
  }).isRequired,
};
export default Profile;
