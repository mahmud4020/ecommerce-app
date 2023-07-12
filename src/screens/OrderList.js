import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from './Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderList = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
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
            <View style={{width: '55%'}}>
              <Text
                style={{
                  color: Color.fadedBlack,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                  fontWeight: '500',
                }}>
                Casual Shirt
              </Text>
              <Text
                style={{
                  color: Color.gray,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                $1300
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '20%',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Icon
                  name="plus-circle-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: Color.gray,
                  textAlign: 'center',
                  fontSize: Dimensions.get('window').width > 500 ? 25 : 18,
                  marginHorizontal:
                    Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                5
              </Text>
              <TouchableOpacity>
                <Icon
                  name="minus-circle-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '90%',
                height: 1.5,
                backgroundColor: Color.lightgray,
                position: 'absolute',
                bottom: 0,
                right: '5%',
              }}></View>
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
              <Text
                style={{
                  color: Color.gray,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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
            <View style={{width: '55%'}}>
              <Text
                style={{
                  color: Color.fadedBlack,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                  fontWeight: '500',
                }}>
                Casual Shirt
              </Text>
              <Text
                style={{
                  color: Color.gray,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                $1300
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '20%',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Icon
                  name="plus-circle-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: Color.gray,
                  textAlign: 'center',
                  fontSize: Dimensions.get('window').width > 500 ? 25 : 18,
                  marginHorizontal:
                    Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                5
              </Text>
              <TouchableOpacity>
                <Icon
                  name="minus-circle-outline"
                  size={Dimensions.get('window').width > 500 ? 25 : 18}
                  color={Color.black}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '90%',
                height: 1.5,
                backgroundColor: Color.lightgray,
                position: 'absolute',
                bottom: 0,
                right: '5%',
              }}></View>
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
              <Text
                style={{
                  color: Color.gray,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.paymentTitle}>Payment Summery</Text>

        <View
          style={{
            backgroundColor: Color.white,
            elevation: 5,
            shadowColor: Color.gray,
            width: wp('100%') - 40,
            paddingVertical: 20,
            borderRadius: 8,
          }}>
          <View style={styles.paymentdataContainer}>
            <Text style={styles.paymentdataStyle}>SubTotal</Text>
            <Text style={styles.paymentdataStyle}>$5.00</Text>
          </View>

          <View style={styles.paymentdataContainer}>
            <Text style={styles.paymentdataStyle}>Tax & Fee</Text>
            <Text style={styles.paymentdataStyle}>$5.00</Text>
          </View>

          <View style={styles.paymentdataContainer}>
            <Text style={styles.paymentdataStyle}>Delivery</Text>
            <Text style={styles.paymentdataStyle}>$5.00</Text>
          </View>

          <View style={[styles.paymentdataContainer, {marginTop: 30}]}>
            <Text
              style={[
                styles.paymentdataStyle,
                {
                  fontWeight: '500',
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                },
              ]}>
              Total
            </Text>
            <Text style={styles.paymentdataStyle}>$5.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnwrapper}
          onPress={() => navigation.navigate('PaymentScreen')}>
          <Text style={styles.btnTxt}>Check out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  tinyImage: {
    width: wp('15%'),
    height: hp('15%'),
  },
  singleClm: {
    width: '90%',
    backgroundColor: Color.white,
    elevation: 5,
    shadowColor: Color.black,
    marginTop: 20,
  },
  paymentTitle: {
    textAlign: 'left',
    width: '100%',
    marginLeft: '10%',
    color: Color.fadedBlack,
    marginVertical: 20,
    fontSize: Dimensions.get('window').width > 500 ? 25 : 18,
  },
  paymentdataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentdataStyle: {
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    color: Color.fadedBlack,
    padding: 10,
    paddingBottom: wp('.5%'),
  },
  btnwrapper: {
    width: '60%',
    backgroundColor: Color.primary,
    borderRadius: 50,
    marginVertical: 30,
  },
  btnTxt: {
    textAlign: 'center',
    color: Color.white,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    padding: 8,
  },
});
