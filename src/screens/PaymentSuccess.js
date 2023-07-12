import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {Color} from './Colors';
import {useNavigation} from '@react-navigation/native';

const PaymentSuccess = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Icon
          name="like"
          size={Dimensions.get('window').width > 500 ? 250 : 140}
          color={Color.primary}
        />
        <Text style={styles.heading}>Payment Complete</Text>
        <Text style={styles.info}>
          we have sent you an email with all the details of your order !
        </Text>
        <Text style={[styles.info, {marginTop: 20}]}>
          ORDER ID: 452585702145
        </Text>
      </View>
    </ScrollView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  heading: {
    color: Color.primary,
    fontSize: Dimensions.get('window').width > 500 ? 30 : 20,
    marginVertical: 20,
  },
  info: {
    color: Color.black,
    fontSize: Dimensions.get('window').width > 500 ? 20 : 15,
    textAlign: 'center',
  },
});
