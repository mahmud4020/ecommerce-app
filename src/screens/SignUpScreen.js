// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// export default function SignUpScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>Sign Up Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from './Colors';
import {ScrollView} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: Color.white,
        }}>
        <View style={styles.topCircle}></View>
        <View style={styles.logoStyle}>
          <Image
            style={{
              width: Dimensions.get('window').width / 5,
              height: Dimensions.get('window').width / 5,
            }}
            source={require('../img/logo.png')}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={{flex: 1, width: '100%', paddingHorizontal: 30}}>
          <Text style={[styles.inputTitle, {marginTop: 20}]}>Name</Text>
          <TextInput style={styles.input} />

          <Text style={[styles.inputTitle, {marginTop: 20}]}>Email</Text>
          <TextInput style={styles.input} />

          <Text style={[styles.inputTitle, {marginTop: 20}]}>Password</Text>
          <TextInput style={styles.input} />

          <Text style={[styles.inputTitle, {marginTop: 20}]}>
            Confirm Password
          </Text>
          <TextInput style={styles.input} />

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text
                style={{textAlign: 'center', fontSize: 18, color: Color.white}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.inputTitle}>Have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={[styles.inputTitle, {color: Color.primary}]}>
                sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.leftHrline}></View>
            <Text style={styles.inputTitle}>Or With</Text>

            <View style={styles.rightHrline}></View>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <TouchableOpacity style={styles.googleBtn}>
              <Icon
                name="google"
                size={20}
                style={{marginRight: 10}}
                color={Color.black}
              />
              <Text style={styles.inputTitle}>sigh in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbBtn}>
              <Icon
                name="facebook"
                size={20}
                style={{marginRight: 10}}
                color={Color.black}
              />
              <Text style={styles.inputTitle}>sigh in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomCircle}></View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  topCircle: {
    width: Dimensions.get('window').width / 2 + 50,
    height: Dimensions.get('window').width / 2 + 50,
    backgroundColor: Color.primary,
    borderRadius: 1000,
    position: 'absolute',
    right: '-25%',
    top: '-15%',
    opacity: 0.3,
  },
  bottomCircle: {
    width: Dimensions.get('window').width / 2 + 50,
    height: Dimensions.get('window').width / 2 + 50,
    backgroundColor: Color.primary,
    borderRadius: 1000,
    position: 'absolute',
    left: '-25%',
    bottom: '-15%',
    opacity: 0.3,
    zIndex: -1,
  },
  logoStyle: {
    marginTop: '20%',
    backgroundColor: Color.white,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    padding: 10,
    borderRadius: 1000,
    elevation: 3,
    shadowColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: Color.black,
    marginTop: 50,
    fontWeight: '400',
  },
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
    fontSize: 15,
    color: Color.gray,
    marginBottom: 5,
    fontWeight: '500',
  },
  loginBtn: {
    width: '80%',
    height: 50,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 50,
  },
  leftHrline: {
    width: Dimensions.get('window').width / 5,
    height: 2,
    backgroundColor: Color.black,
    position: 'absolute',
    left: Dimensions.get('window').width > 500 ? 150 : 50,
    top: 9,
  },
  rightHrline: {
    width: Dimensions.get('window').width / 5,
    height: 2,
    backgroundColor: Color.black,
    position: 'absolute',
    right: Dimensions.get('window').width > 500 ? 150 : 50,
    top: 9,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.black,
    width: '70%',
    padding: 5,
    marginBottom: 10,
  },
  fbBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Color.black,
    width: '70%',
    padding: 5,
  },
});
