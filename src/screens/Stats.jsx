import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';


import Rankings from './Rankings';
import Activity from './Activity';


const Tab = createMaterialTopTabNavigator();

const Stats =() => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: "none",
          fontWeight: 'bold',
          fontSize: 16
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',  
        },
        tabBarIndicatorStyle: {
          backgroundColor: "rgb(0,122,255)",
          height: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }
      }}>
        <Tab.Screen 
          name='Rankıngs' 
          component={Rankings} 
          options={{
            tabBarIcon:({color}) => (
              <Ionicons 
                name= "stats-chart"
                size={20}
                color={color}
              />
            ),       
          }}
          />

        <Tab.Screen 
          name='Actıvıty' 
          component={Activity} 
          options={{
            tabBarIcon:({color}) => (
              <SimpleLineIcons 
                name= "graph"
                size={20}
                color={color}
              />
            ),       
          }}
        />


        
        
      </Tab.Navigator>
    )
}

export default Stats