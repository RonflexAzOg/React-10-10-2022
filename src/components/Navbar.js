import React from 'react'
import './styles/Navbar.scss'
import Poire from '../img/dashboard/lhomme-poire.jpeg'
import FrenchFlag from '../img/dashboard/french.jpg'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="language">
        <img src={FrenchFlag} alt="French flag" width={30}/>
      </div>
      <div className="profil">
        <img src={Poire} alt="" width={40} height={40}/>
        MD Team
      </div>
    </div>
  )
}
