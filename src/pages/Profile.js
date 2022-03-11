import React from 'react';
import { useSelector} from 'react-redux';
import {selectUser} from '../services/userSlice';



function Profile() {
  console.log('I am in profile');
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div >
        <h1>Profile</h1>
    </div>
  );
}

export default Profile;
