import React from 'react';

const Profile = () => {
  const age = 22;
  const location = "Nigeria";
  const status = "Nursing Student";

  return (
    <div className="profile-card">
      <h2>My Profile</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Profile;