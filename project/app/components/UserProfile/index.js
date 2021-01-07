import React from 'react';
import UserDisplay from './UserDisplay';
import ProfileNav from '../Navigation/ProfileNav';
import Billing from './Billing';
import Shipping from './Shipping';
import { useAppStore } from '../../hooks';

const UserProfile = () => {
  const { init } = useAppStore(store => store);
  init();

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <ProfileNav />

      <div style={{ paddingTop: 20 }}>
        <UserDisplay />
        <Billing />
        <Shipping />
      </div>
    </div>
  );
};

export default UserProfile;
