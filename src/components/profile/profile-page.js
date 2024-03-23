import axios from "axios";
import { useEffect, useState } from "react";
import './profile-page.css';


const Profile = ({ storedUser, setLoginSuccess }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await axios({
          url: `https://dummyjson.com/users/${storedUser?.id}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${storedUser?.token}`,
          },

        });
        if (response?.request?.status == 200) {
          setUser(response.data);
          // console.log(response.data);
        }
        else {
          localStorage.removeItem('user');
          setLoginSuccess(true);
        }
      } catch (error) {
        console.log('er>>', error);
      }
    })()
  }, []);
  return (
    <div className="profile-page">
      <div>
        <div className="image-wrapper">
          <img src={user.image}></img>
        </div>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <p>name: {`${user.firstName} ${user.lastName}`}</p>
        <p>email: {user.email}</p>
        <p>gender: {user.gender}</p>
      </div>
    </div>

  )
}

export default Profile;