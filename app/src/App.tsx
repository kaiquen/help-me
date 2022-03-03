import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import MainStack from './stacks/MainStack';
import { UserProvider } from './context/userContext';

export default () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserProvider>
  )
}