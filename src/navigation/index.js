import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Custom Layout for the Drawer
import SideBar from '../layouts/SideBar';
import Footer from '../layouts/Footer';
// Import custom screens
import HomeScreen from '../screens/Home';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'none',
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
    )
};


const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <Footer {...props} />}>

            <Tab.Screen name="HomeTab" component={HomeStack} />
        </Tab.Navigator>
    )
};



export default DrawerNavigator;