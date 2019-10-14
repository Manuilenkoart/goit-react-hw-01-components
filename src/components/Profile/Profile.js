import React from 'react';

import Description from './Description/Description';
import Stats from './Stats/Stats';
import user from './user.json';

const Profile = () => (
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

export default Profile;
