import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar"
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from './components/HomeScreen'
import MeasurementsScreen from './components/MeasurementsScreen'
import TrainingScreen from './components/TrainingScreen'

const Tabs = AnimatedTabBarNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#0F4C75",
          inactiveTintColor: "#222222",
        }}
      >
         <Tabs.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FeatherIcon
                name="home"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="Measurements" 
          component={MeasurementsScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FeatherIcon
                name="user" 
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="Training" 
          component={TrainingScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5Icon
                name="dumbbell" 
                size={size ? size : 24}
                color={focused ? color : "#222222"}
              />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
