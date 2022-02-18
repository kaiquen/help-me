import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerLayoutAndroid,Dimensions } from 'react-native';
import Home from '../screens/Home';
import Carteira from '../screens/Carteira';
import Agenda from '../screens/Agenda';
import Chat from '../screens/Chat';
import Pedir from '../screens/Pedir';
import TabBar from '../components/TabBar';
import TabHeader from '../components/TabHeader';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => {
    const drawer = useRef(null);
    
    return (
        <DrawerLayoutAndroid 
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition='right'
            renderNavigationView={Profile}
        >
            <Tab.Navigator  
                tabBar={props => <TabBar {...props}/>} 
                initialRouteName='Carteira'
                screenOptions={{
                    header: (props) => <TabHeader drawer={drawer} {...props}/>
                }}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Carteira" component={Carteira}/>
                <Tab.Screen name="Pedir" component={Pedir}/>
                <Tab.Screen name="Agenda" component={Agenda}/>
                <Tab.Screen name="Chat" component={Chat}/>
            </Tab.Navigator>
        </DrawerLayoutAndroid>
    );
}