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

const ForgotPassScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: Color.white,
        }}>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                width: Dimensions.get('window').width / 1.3,
                height: Dimensions.get('window').height / 2,
              }}
              source={require('../img/3.png')}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainTitle}>Forgot Your Password</Text>

          <Text style={styles.shortDesc}>
            Please Enter the verification code we sent to your email address.
          </Text>

          <View style={{marginHorizontal: 20}}>
            <Text style={[styles.inputTitle, {marginTop: 20}]}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder={'Enter Your Password'}
            />
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => navigation.navigate('VerifyCodeScreen')}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    backgroundColor: Color.white,
    width: '100%',
    height: 40,
    padding: 5,
    elevation: 3,
    fontSize: hp('1.5%'),

    shadowColor: Color.black,
  },
  inputTitle: {
    fontSize: hp('2%'),
    color: Color.gray,
    marginBottom: 5,
    fontWeight: '400',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: hp('3%'),
    fontWeight: '500',
    color: Color.fadedBlack,
  },
  shortDesc: {
    padding: 5,
    fontSize: hp('1.5%'),
    color: Color.gray,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
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
