import React from 'react'

import LogoWhite from '../LogoWhite'
import Home from '../../img/dashboard/home.png'

import '../styles/Sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <LogoWhite />
      </div>
      <div className="menu">
        <ul>
          <li className='menu-title'>
            Menu
          </li>
          <li>
            <div className="menu-title menu-dashboard">
              <img src={Home} alt="" width={25}/>
              Dashboards
            </div>
            <ul className='menu-li'>
              <li className='menu-content'>All Monitorings</li>
              <li className='menu-content'>Error Monitorings</li>
              <li className='menu-content'>New Monitoring</li>
              <li className='menu-content'>Logs</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar