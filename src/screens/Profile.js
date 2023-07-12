import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from './Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [Show, setShow] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <View style={styles.topCircle}></View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../img/profile.png')}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.Title}>William Something</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditmainAddress')}
            style={{
              position: 'absolute',
              right: Dimensions.get('window').width > 500 ? 80 : 50,
              top: 0,
            }}>
            <View style={styles.editBackground}>
              <Icon
                name="pencil"
                size={Dimensions.get('window').width > 500 ? 25 : 15}
                color={Color.white}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.contactInfo}>+5835645236552</Text>
        <Text style={styles.contactInfo}>admin@gmail.com</Text>

        <View
          style={{
            marginTop: '20%',
            width: '100%',
          }}>
          <View style={styles.OptionsWrapper}>
            <Text style={styles.OptionsTxt}>My Orders</Text>
            <Icon name="arrow-right" size={wp('5%')} color={Color.gray} />
          </View>
        </View>

        <View
          style={{
            width: '100%',
          }}>
          <View
            style={[
              styles.OptionsWrapper,
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            ]}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <Text style={styles.OptionsTxt}>Billing Address</Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
                onPress={() => setShouldShow(!shouldShow)}>
                <Icon name="dots-vertical" size={wp('5%')} color={Color.gray} />
              </TouchableOpacity>
            </View>
            <View style={styles.optionsData}>
              <Icon
                name="account"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>William Benjamin</Text>
            </View>
            <View style={styles.optionsData}>
              <Icon
                name="tablet-android"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>+8888 1111 0000</Text>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="mail"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>admin@gmail.com</Text>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="map-marker"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>
                3909 Witmer Rd, Niagara Falls, NY 14305, United States
              </Text>
            </View>

            {shouldShow ? (
              <View style={styles.ActionWrapper}>
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                  <Icon
                    name="close-circle"
                    size={Dimensions.get('window').width > 500 ? 20 : 18}
                    color={Color.black}
                    style={{
                      width: 20,
                      height: 20,
                      position: 'absolute',
                      right: -20,
                      top: -5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditBillingAddress')}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>

        <View
          style={{
            width: '100%',
          }}>
          <View
            style={[
              styles.OptionsWrapper,
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            ]}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <Text style={styles.OptionsTxt}>Shipping Address</Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
                onPress={() => setShow(!Show)}>
                <Icon name="dots-vertical" size={wp('5%')} color={Color.gray} />
              </TouchableOpacity>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="account"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>William Benjamin</Text>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="tablet-android"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>+8888 1111 0000</Text>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="mail"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>admin@gmail.com</Text>
            </View>

            <View style={styles.optionsData}>
              <Icon
                name="map-marker"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 8}}
              />

              <Text style={styles.optionsDataTitle}>
                3909 Witmer Rd, Niagara Falls, NY 14305, United States
              </Text>
            </View>

            {Show ? (
              <View style={styles.ActionWrapper}>
                <TouchableOpacity onPress={() => setShow(!Show)}>
                  <Icon
                    name="close-circle"
                    size={Dimensions.get('window').width > 500 ? 20 : 18}
                    color={Color.black}
                    style={{
                      width: 20,
                      height: 20,
                      position: 'absolute',
                      right: -20,
                      top: -5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditShippingAddress')}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          <View
            style={{
              width: '100%',
              marginLeft: 25,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '20%',
              }}>
              <Icon
                name="logout"
                size={wp('5%')}
                color={Color.black}
                style={{marginRight: 10}}
              />
              <Text style={styles.OptionsTxt}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topCircle: {
    width: wp('110%'),
    height: wp('105%'),
    backgroundColor: Color.primary,
    borderRadius: 1000,
    position: 'absolute',
    top: Dimensions.get('window').width > 500 ? -350 : -150,
    left: '-5%',
  },
  imageContainer: {
    borderWidth: Dimensions.get('window').width > 500 ? 10 : 5,
    borderColor: Color.white,
    borderRadius: 1000,
    marginTop: '5%',
    marginBottom: 20,
  },
  imgStyle: {
    width: Dimensions.get('window').width > 500 ? 200 : 100,
    height: Dimensions.get('window').width > 500 ? 200 : 100,
    borderRadius: 1000,
  },
  Title: {
    fontSize: Dimensions.get('window').width > 500 ? 30 : 18,
    color: Color.white,
    marginBottom: 15,
  },
  editBackground: {
    width: Dimensions.get('window').width > 500 ? 50 : 25,
    height: Dimensions.get('window').width > 500 ? 50 : 25,
    backgroundColor: '#63B585',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  contactInfo: {
    fontSize: Dimensions.get('window').width > 500 ? 20 : 14,
    color: Color.white,
  },
  OptionsWrapper: {
    borderBottomWidth: 1,
    borderColor: Color.gray,
    width: '100%',
    padding: 10,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  OptionsTxt: {
    textAlign: 'left',
    color: Color.black,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
  },
  edit: {
    color: 'black',
    padding: Dimensions.get('window').width > 500 ? 5 : 5,
    fontSize: Dimensions.get('window').width > 500 ? 14 : 13,
    borderBottomWidth: 1,
  },
  remove: {
    color: 'black',
    padding: Dimensions.get('window').width > 500 ? 5 : 5,
    fontSize: Dimensions.get('window').width > 500 ? 14 : 13,
  },
  ActionWrapper: {
    position: 'absolute',
    right: Dimensions.get('window').width > 500 ? '3%' : '5.2%',
    top: 2,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.black,
  },
  optionsData: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginVertical: 2,
  },
  optionsDataTitle: {
    color: Color.gray,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    paddingRight: 10,
  },
});
