import React from 'react';

import User from './User';

const UserList = (props) => {
  return (
    <ul className='user-card'>
      {props.users.map((u, i) => (
        <User
            key={u.uuid}
            titleName={u.titleName}
            firstName={u.firstName}
            lastName={u.lastName}
            username={u.username}
            email={u.email}
            streetNumber={u.streetNumber}
            streetName={u.streetName}
            postcode={u.postcode}
            state={u.state}
            country={u.country}
            phone={u.phone}
            picture={u.picture}
        />
      ))}
    </ul>
  );
};

export default UserList;