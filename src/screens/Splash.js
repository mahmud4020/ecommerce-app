import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 4000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232323',
      }}>
      <Image
        style={{
          width: Dimensions.get('window').width / 2,
          height: Dimensions.get('window').height / 4,
        }}
        source={require('../img/logo.png')}
        resizeMode="center"
      />
    </View>
  );
};

export default Splash;
