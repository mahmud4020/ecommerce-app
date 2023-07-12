import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Description from './Description';
import Review from './Review';

const Tab = createMaterialTopTabNavigator();

const Toptab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Review" component={Review} />
    </Tab.Navigator>
  );
};

export default Toptab;
