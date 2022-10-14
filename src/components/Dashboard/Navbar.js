import React from 'react'

import Pp from '../../img/dashboard/lhomme-poire.jpeg'
import FrenchFlag from '../../img/dashboard/french.jpg'

import '../styles/Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="language">
        <img src={FrenchFlag} alt="French flag" width={30}/>
      </div>
      <div className="profil">
        <img src={Pp} alt="Profile" width={40} height={40}/>
        Lucas
      </div>
    </div>
  )
}