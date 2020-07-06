import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home1 from './components/home/Home1';
import Home2 from './components/home/Home2';
import Home3 from './components/home/Home3';
import Home4 from './components/home/Home4';

const Tab = createBottomTabNavigator();

const Home1Stack = createStackNavigator();
const Home2Stack = createStackNavigator();
const Home3Stack = createStackNavigator();
const Home4Stack = createStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: false,
  cardOverlayEnabled: true,
};

const tabBarOptions = {
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
  labelStyle: {
    fontSize: 13,
    fontWeight: '700',
  },
  style: {
    backgroundColor: '#000000',
    borderWidth: 0,
    borderTopColor: '#000000',
  },
};

function Home1StackScreen() {
  return (
    <Home1Stack.Navigator initialRouteName="Home1" screenOptions={options}>
      <Home1Stack.Screen name="Home1" component={Home1} />
    </Home1Stack.Navigator>
  );
}

function Home2StackScreen() {
  return (
    <Home2Stack.Navigator initialRouteName="Home2" screenOptions={options}>
      <Home2Stack.Screen name="Home2" component={Home2} />
    </Home2Stack.Navigator>
  );
}

function Home3StackScreen() {
  return (
    <Home3Stack.Navigator initialRouteName="Home3" screenOptions={options}>
      <Home3Stack.Screen name="Home3" component={Home3} />
    </Home3Stack.Navigator>
  );
}
function Home4StackScreen() {
  return (
    <Home4Stack.Navigator initialRouteName="Home4" screenOptions={options}>
      <Home4Stack.Screen name="Home4" component={Home4} />
    </Home4Stack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home1"
          component={Home1StackScreen}
          options={{
            tabBarLabel: 'Home1',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home2"
          component={Home2StackScreen}
          options={{
            tabBarLabel: 'Home2',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-details"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home3"
          component={Home3StackScreen}
          options={{
            tabBarLabel: 'Home3',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="alarm-snooze"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home4"
          component={Home4StackScreen}
          options={{
            tabBarLabel: 'Home4',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="baguette"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
