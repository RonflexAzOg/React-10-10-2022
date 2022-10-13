import React, { useCallback, useEffect, useState } from 'react';

import Sidebar from '../components/Dashboard/Sidebar';
import Navbar from '../components/Dashboard/Navbar';
import UserList from '../components/Dashboard/UsersList';
import CreatedUser from '../components/Dashboard/CreatedUser';
import AddUser from '../components/Dashboard/AddUser';

import '../styles/Dashboard.scss';

function Dashboard() {

  const emailLocalStorage = localStorage.getItem("email");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userListDisplay, setUserListDisplay] = useState(null)

  const fetchUsersHandler = useCallback(async () => {
    setLoading(true);
    setError(null);
    try{
      const response = await fetch('https://randomuser.me/api/');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedUsers = data.results.map((userData) => {
        return {
          titleName: userData.name.title,
          firstName: userData.name.first,
          lastName: userData.name.last,
          username: userData.login.username,
          uuid: userData.login.uuid,
          email: userData.email,
          streetNumber: userData.location.street.number,
          streetName: userData.location.street.name,
          postcode: userData.location.postcode,
          state: userData.location.state,
          country: userData.location.country,
          phone: userData.phone, 
          picture: userData.picture.large,
        };
      });
      setUsers(transformedUsers);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  // Refresh the user genereted automatically
  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  // Add User
  function addUserHandler(createUser) {
    setUserListDisplay(<CreatedUser user={createUser} />);
  }

  // Content API
  let content = <p className='user-card'>Found no users.</p>;
  if (users.length > 0) {
    content = <UserList users={users} />;
  }
  if (error) {
    content = <p className='user-card'>{error}</p>;
  }
  if (loading) {
    content = <p className='loading-content'>Loading...</p>;
  }

  return (

    <div className='dashboard'>
        <Sidebar />
        <Navbar />
        <div className="content-dashboard">
          <h1>Welcome {emailLocalStorage}</h1>
          <h2>User generated automatically</h2>
          <section className='user-content'>
            {content}
            <button onClick={fetchUsersHandler}>Fetch User</button>
          </section>
          <h2>Create your own user</h2>
          <div className="createUser">
            <AddUser onAddUser={addUserHandler} />
            {userListDisplay}
          </div>
        </div>
    </div>

  )
}

export default Dashboard