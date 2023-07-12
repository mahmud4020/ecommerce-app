import {View, Text, Pressable} from 'react-native';
import React from 'react';

const ExtraPages = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('MyCart')}>
        <Text style={{color: 'black'}}>Go to My Cart Screen</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text style={{color: 'black'}}>Go to profile</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('MyOrders')}>
        <Text style={{color: 'black'}}>Go to My order</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SearchFilter')}>
        <Text style={{color: 'black'}}>Search filter</Text>
      </Pressable>
    </View>
  );
};

export default ExtraPages;
