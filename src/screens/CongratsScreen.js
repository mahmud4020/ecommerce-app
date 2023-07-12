import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Color} from './Colors';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CongratsScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: Color.white,
        }}>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            <Image
              style={{
                width: Dimensions.get('window').width / 2,
                height: Dimensions.get('window').width / 2,
              }}
              source={require('../img/2.png')}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainTitle}>Congratulation!</Text>

          <Text style={styles.shortDesc}>Your new password has been set.</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CongratsScreen;

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'center',
    fontSize: hp('3%'),
    fontWeight: '500',
    color: Color.primary,
  },
  shortDesc: {
    padding: 5,
    fontSize: hp('2%'),
    color: Color.primary,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
  btnWrapper: {
    width: '70%',
    backgroundColor: Color.primary,
    borderRadius: 50,
    marginVertical: 30,
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: Color.white,
    fontSize: hp('2.3%'),
  },
});
