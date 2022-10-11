import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

import './styles/Dashboard.scss'

function Dashboard() {

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((response) => response.json())
    .then((actualData) => console.log(actualData));
  }, []);

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