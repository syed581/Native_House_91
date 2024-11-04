import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native'; // Import Image
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import RentSaleScreen from '../screens/RentSaleScreen';
import LikedScreen from '../screens/LikedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MainScreen from '../screens/MainScreen';
import Register from '../screens/Register';
import LoginScreen from '../screens/LoginScreen';

const homeIcon = require('../../assets/home.png'); // Adjust the path to your image
const savedIcon = require('../../assets/saved.png'); // Adjust the path to your image
const rentSaleIcon = require('../../assets/add.png'); // Adjust the path to your image
const likedIcon = require('../../assets/liked.png'); // Adjust the path to your image
const profileIcon = require('../../assets/profile.png'); // Adjust the path to your image

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#128807"
      inactiveColor="gray"
      barStyle={{
        backgroundColor: 'white',
        // borderTopWidth: 1,
        // borderTopColor: 'gray',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // position: 'absolute',
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={homeIcon}
              style={{width: 18, height: 18, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={savedIcon}
              style={{width: 18, height: 18, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rent/Sale"
        component={RentSaleScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={rentSaleIcon}
              style={{width: 18, height: 18, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={likedIcon}
              style={{width: 20, height: 17, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={profileIcon}
              style={{width: 18, height: 18, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
