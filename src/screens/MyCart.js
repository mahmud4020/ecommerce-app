import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from './Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyCart = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: Color.white,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.singleClm}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image
                  style={styles.tinyImage}
                  source={require('../img/8.png')}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  width: Dimensions.get('window').width > 500 ? '60%' : '50%',
                }}>
                <Text style={styles.productTitle}>Casual Shirt</Text>
                <Text style={styles.productTitle}>$1300</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // width: '20%',

                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Icon
                    name="plus-circle-outline"
                    size={Dimensions.get('window').width > 500 ? 25 : 18}
                    color={Color.black}
                  />
                </TouchableOpacity>

                <Text style={styles.quantity}>5</Text>
                <TouchableOpacity>
                  <Icon
                    name="minus-circle-outline"
                    size={Dimensions.get('window').width > 500 ? 25 : 18}
                    color={Color.black}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.hrLine}></View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="trash-can-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                  style={{marginRight: 8}}
                />
                <Text style={styles.removeTxt}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.singleClm}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image
                  style={styles.tinyImage}
                  source={require('../img/9.png')}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  width: Dimensions.get('window').width > 500 ? '60%' : '50%',
                }}>
                <Text style={styles.productTitle}>Casual Shirt</Text>
                <Text style={styles.productTitle}>$1300</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // width: Dimensions.get('window').width > 500 ? '25%' : '15%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 18,
                }}>
                <TouchableOpacity>
                  <Icon
                    name="plus-circle-outline"
                    size={Dimensions.get('window').width > 500 ? 25 : 18}
                    color={Color.black}
                  />
                </TouchableOpacity>

                <Text style={styles.quantity}>5</Text>
                <TouchableOpacity>
                  <Icon
                    name="minus-circle-outline"
                    size={Dimensions.get('window').width > 500 ? 25 : 18}
                    color={Color.black}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.hrLine}></View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="trash-can-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                  style={{marginRight: 8}}
                />
                <Text style={styles.removeTxt}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnwrapper}
            onPress={() => navigation.navigate('PaymentScreen')}>
            <Text style={styles.btnTxt}>Check out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  tinyImage: {
    width: wp('15%'),
    height: hp('15%'),
    margin: 5,
  },
  singleClm: {
    width: '100%',
    backgroundColor: Color.white,
    elevation: 5,
    shadowColor: Color.black,
    marginTop: 5,
  },
  productTitle: {
    color: Color.fadedBlack,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    fontWeight: '500',
  },

  quantity: {
    color: Color.gray,
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > 500 ? 25 : 18,
    marginHorizontal: Dimensions.get('window').width > 500 ? 18 : 14,
  },
  removeTxt: {
    color: Color.gray,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
  },
  hrLine: {
    width: '90%',
    height: 1.5,
    backgroundColor: Color.lightgray,
    position: 'absolute',
    bottom: 0,
    right: '5%',
  },

  btnwrapper: {
    width: '60%',
    backgroundColor: Color.primary,
    borderRadius: 10,
    marginVertical: 30,
  },
  btnTxt: {
    textAlign: 'center',
    color: Color.white,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    padding: 8,
  },
});
