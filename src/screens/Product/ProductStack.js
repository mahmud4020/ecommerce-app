import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductDetails from '../ProductDetails';
import Toptab from '../Toptab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Color} from '../Colors';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Toptab"
          component={Toptab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProductStack;
