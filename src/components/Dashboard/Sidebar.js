import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoWhite from '../LogoWhite';
import Home from '../../img/dashboard/home.png';
import Logout from '../../img/dashboard/power-off.png'

import '../styles/Sidebar.scss';

function Sidebar() {

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='sidebar'>
      <div className="top">
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
      <div className="bottom">
        <button onClick={handleClick} className="button-logout">
          <img src={Logout} alt="Logout" width={20} height={20}/>
          Logout
        </button> 
      </div>
    </div>
  )
}

export default Sidebar