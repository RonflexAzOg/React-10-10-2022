import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

import './styles/Dashboard.scss'

function Dashboard() {
  return (

    <div className='dashboard'>
        <Sidebar />
        <Navbar />
        <div className="content-dashboard">
            <h2>Monitoring list</h2>
        </div>
    </div>

  )
}

export default Dashboard