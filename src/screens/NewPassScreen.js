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

const NewPassScreen = ({navigation}) => {
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
              source={require('../img/4.png')}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.mainTitle}>Check Your Email</Text>

          <Text style={styles.shortDesc}>
            Please Enter the verification code we sent to your email address.
          </Text>

          <View style={{marginHorizontal: 20}}>
            <TextInput
              style={[styles.input, {marginTop: 20}]}
              placeholder={'Enter Your Varification Code'}
            />
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => navigation.navigate('CongratsScreen')}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPassScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    backgroundColor: Color.white,
    width: '100%',
    height: 40,
    padding: 5,
    elevation: 3,

    shadowColor: Color.black,
  },
  inputTitle: {
    fontSize: hp('3%'),
    color: Color.gray,
    marginBottom: 5,
    fontWeight: '500',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: Color.fadedBlack,
  },
  shortDesc: {
    padding: 5,
    fontSize: 14,
    color: Color.gray,
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
    fontSize: 18,
  },
});
