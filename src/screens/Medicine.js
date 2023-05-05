import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VnMedicine from '../tabs/VnMedicine';
import FdaMedicine from '../tabs/FdaMedicine';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Medicine = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'VnMedicine') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'FdaMedicine') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="VnMedicine" component={VnMedicine} options={{
                            headerShown: false,
            }}/>
            <Tab.Screen name="FdaMedicine" component={FdaMedicine}  options={{
                            headerShown: false,
            }}/>
        </Tab.Navigator>

    )
}

export default Medicine

const styles = StyleSheet.create({})