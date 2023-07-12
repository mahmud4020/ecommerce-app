import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Color} from './Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyOrders = () => {
  return (
    <View style={{flex: 1, backgroundColor: Color.white, paddingTop: 10}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.itemContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.orderIdbackground}>
              <Text style={styles.topSectiontitle}>Order</Text>
              <Text style={[styles.topSectiontitle, {color: Color.orange}]}>
                #a5afssd5f4sdf2
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.trackBtn}>Track Order</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.midsectionWrapper}>
            <View
              style={{
                marginRight:
                  Dimensions.get('window').width > 500
                    ? wp('-15%')
                    : wp('-10%'),
              }}>
              <Image
                style={{
                  width: wp('20%'),
                  height: wp('20%'),
                  marginRight: 20,
                }}
                source={require('../img/profile.png')}
                resizeMode="contain"
              />
            </View>

            <View>
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: wp('3%'),
                    color: Color.black,
                  }}>
                  Casual shirt
                </Text>
                <Text style={styles.txt}>By ODD</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>
                  Size: l
                </Text>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>Qty: 1</Text>
                <Text style={[styles.txt, {color: Color.black}]}>RS: $100</Text>
              </View>
            </View>

            <View>
              <Text style={styles.txt}>Delivery Estimated by</Text>
              <Text style={[styles.txt, {color: Color.black}]}>
                24 December 2023
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.txt}>Status: </Text>
                <Text style={[styles.txt, {color: Color.yellow}]}>
                  In - Transit
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.orderIdbackground}>
              <Text style={styles.topSectiontitle}>Order</Text>
              <Text style={[styles.topSectiontitle, {color: Color.orange}]}>
                #a5afssd5f4sdf2
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.trackBtn}>Track Order</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.midsectionWrapper}>
            <View
              style={{
                marginRight:
                  Dimensions.get('window').width > 500
                    ? wp('-15%')
                    : wp('-10%'),
              }}>
              <Image
                style={{
                  width: wp('20%'),
                  height: wp('20%'),
                  marginRight: 20,
                }}
                source={require('../img/10.png')}
                resizeMode="contain"
              />
            </View>

            <View>
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: wp('3%'),
                    color: Color.black,
                  }}>
                  Casual shirt
                </Text>
                <Text style={styles.txt}>By ODD</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>
                  Size: l
                </Text>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>Qty: 1</Text>
                <Text style={[styles.txt, {color: Color.black}]}>RS: $100</Text>
              </View>
            </View>

            <View>
              <Text style={styles.txt}>Delivery Estimated by</Text>
              <Text style={[styles.txt, {color: Color.black}]}>
                24 December 2023
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.txt}>Status: </Text>
                <Text style={[styles.txt, {color: Color.primary}]}>
                  Delivered
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.orderIdbackground}>
              <Text style={styles.topSectiontitle}>Order</Text>
              <Text style={[styles.topSectiontitle, {color: Color.orange}]}>
                #a5afssd5f4sdf2
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.trackBtn}>Track Order</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.midsectionWrapper}>
            <View
              style={{
                marginRight:
                  Dimensions.get('window').width > 500
                    ? wp('-15%')
                    : wp('-10%'),
              }}>
              <Image
                style={{
                  width: wp('20%'),
                  height: wp('20%'),
                  marginRight: 20,
                }}
                source={require('../img/9.png')}
                resizeMode="contain"
              />
            </View>

            <View>
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: wp('3%'),
                    color: Color.black,
                  }}>
                  Casual shirt
                </Text>
                <Text style={styles.txt}>By ODD</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>
                  Size: l
                </Text>
                <Text style={{marginRight: 5, fontSize: wp('3%')}}>Qty: 1</Text>
                <Text style={[styles.txt, {color: Color.black}]}>RS: $100</Text>
              </View>
            </View>

            <View>
              <Text style={styles.txt}>Delivery Estimated by</Text>
              <Text style={[styles.txt, {color: Color.black}]}>
                24 December 2023
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.txt}>Status: </Text>
                <Text style={[styles.txt, {color: Color.red}]}>Cancelled</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  itemContainer: {
    elevation: 8,
    backgroundColor: Color.white,
    shadowColor: Color.black,
    margin: 10,
    padding: 10,
  },
  topSectiontitle: {
    fontSize: wp('3%'),
    marginRight: 3,
    fontWeight: '500',
  },
  trackBtn: {
    fontSize: wp('3%'),
    backgroundColor: Color.orange,
    padding: 5,
    borderRadius: 8,
    color: Color.white,
  },
  orderIdbackground: {
    flexDirection: 'row',
    backgroundColor: Color.light,
    padding: 2,
  },
  midsectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontWeight: '500',
    fontSize: wp('3%'),
    color: Color.gray,
  },
  cancelBtn: {
    textAlign: 'center',
    fontSize: wp('4%'),
    borderTopWidth: 1,
    borderColor: Color.lightgray,
    marginTop: 10,
    paddingTop: 10,
  },
});
