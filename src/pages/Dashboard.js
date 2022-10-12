import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Dashboard/Sidebar';
import Navbar from '../components/Dashboard/Navbar';

import '../styles/Dashboard.scss';

function Dashboard() {

  const emailLocalStorage = localStorage.getItem("email");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/`)
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
          <h1>Welcome {emailLocalStorage}</h1>
            <h2>User generated</h2>
            <ul>
              {data &&
                data.results.map(({ name, email, login, location, phone, picture }, i) => (
                  <li key={i}>
                    <div className="img-content">
                      <img src={picture.large} alt="" className='circle-image' width={200}/>
                      <div className="content">
                        <h2>{login.username} - {email}</h2>
                        <h3>{name.title}, {name.first} {name.last}</h3>
                        <p>Phone number : {phone}</p>
                        <p>Location : {location.street.number} {location.street.name} <br/> {location.postcode} {location.state} {location.country}</p>
                      </div>
                      <button>Modifier les données</button>
                    </div>
                  </li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default Dashboard