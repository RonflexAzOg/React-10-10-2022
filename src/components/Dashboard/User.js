import React from 'react';

import Mail from '../../img/dashboard/mail.png'
import Account from '../../img/dashboard/user.png'
import Phone from '../../img/dashboard/telephone.png'
import Pins from '../../img/dashboard/placeholder.png'

const User = (props) => {
  return (
    <li key={props.uuid}>
        <div className="img-content">
            <img src={props.picture} alt="" className='circle-image' width={200}/>
            <div className="content">
                <h2>{props.username}</h2>
                <ul className='data'>
                    <li><img src={Mail} alt="Mail" width={20}/>{props.email}</li>
                    <li><img src={Account} alt="Account" width={20}/>{props.titleName} {props.firstName} {props.lastName}</li>
                    <li><img src={Phone} alt="Phone" width={20}/>{props.phone}</li>
                    <li className='location'><img src={Pins} alt="Pins" width={20} height={20}/>{props.streetNumber} {props.streetName} <br/> {props.postcode} {props.state} {props.country}</li>
                </ul>
            </div>
        </div>
    </li>
  );
};

export default User;