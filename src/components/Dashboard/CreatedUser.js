import React from 'react';

import User from './User';

const CreatedUser = (props) => {
  return (
    <ul className='user-card'>
        <User
            firstName={props.user.firstName}
            lastName={props.user.lastName}
            username={props.user.username}
            email={props.user.email}
            streetNumber={props.user.streetNumber}
            streetName={props.user.streetName}
            postcode={props.user.postcode}
            state={props.user.state}
            country={props.user.country}
            phone={props.user.phone}
            picture={props.user.picture}
        />
    </ul>
  );
};

export default CreatedUser;