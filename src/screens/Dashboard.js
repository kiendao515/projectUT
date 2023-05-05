import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Medicine from './Medicine';
import Statistic from './Statistic';

const Drawer = createDrawerNavigator();
export default function Dashboard({ navigation }) {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Medicine" component={Medicine} />
        <Drawer.Screen name="Statistic" component={Statistic} />
    </Drawer.Navigator>
  )
}
