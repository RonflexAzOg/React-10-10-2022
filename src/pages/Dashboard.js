import React, { useEffect, useState } from 'react'

import Sidebar from '../components/Dashboard/Sidebar'
import Navbar from '../components/Dashboard/Navbar'

import '../styles/Dashboard.scss'

function Dashboard() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);
  

  return (

    <div className='dashboard'>
        <Sidebar />
        <Navbar />
        <div className="content-dashboard">
            <h2>Monitoring list</h2>
            <ul>
              {data &&
                data.map(({ id, title, body }) => (
                  <li key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default Dashboard