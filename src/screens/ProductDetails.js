import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from './Colors';
import Toptab from './Toptab';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProductDetails = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Color.white,
      }}>
      <View>
        <View>
          <Image
            style={styles.wideImage}
            source={require('../img/12.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.squareImageContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.squareImageSection}>
                <Image
                  style={styles.squareImages}
                  source={require('../img/8.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.squareImageSection}>
                <Image
                  style={styles.squareImages}
                  source={require('../img/9.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.squareImageSection}>
                <Image
                  style={styles.squareImages}
                  source={require('../img/10.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.squareImageSection}>
                <Image
                  style={styles.squareImages}
                  source={require('../img/8.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={{padding: 5}}>
          <Text style={styles.ProductTitle}>Best Value Men’s Dress Shirt</Text>
          <Text style={styles.ProductShortDesc}>
            “This style fits more body types because it’s constructed like a
            dress shirt style in Pima cotton but has 4-way stretch that allows
            for a more forgiving and comfortable fit.”
          </Text>

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Text style={styles.sizeFontStyle}>Size</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text style={styles.sizeValue}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.sizeValue}>Xl</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.sizeValue, styles.sizeActiveValue]}>
                    XXl
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Text style={styles.sizeFontStyle}>Color</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Text style={[styles.Color, styles.ColorCode1]}></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.Color, styles.ColorCode2]}></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.Color, styles.ColorCode3]}></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Toptab />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{width: '30%'}}
              onPress={() => navigation.navigate('OrderList')}>
              <Text
                style={{
                  backgroundColor: Color.primary,
                  color: Color.white,
                  fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
                  textAlign: 'center',
                  padding: 10,
                  borderRadius: 50,
                }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  wideImage: {
    width: Dimensions.get('window').width,
    height: hp('30%'),
    borderWidth: 1,
    borderColor: Color.gray,
  },
  squareImageContainer: {
    borderBottomColor: Color.lightgray,
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: Color.light,
  },
  squareImageSection: {
    margin: 10,
    elevation: 5,
    shadowColor: Color.black,
    backgroundColor: Color.white,
  },
  squareImages: {
    width: wp('30%'),
    height: hp('20%'),
    borderWidth: 1,
    borderColor: Color.lightgray,
  },
  ProductTitle: {
    fontSize: Dimensions.get('window').width > 500 ? 20 : 18,
    fontWeight: '500',
    color: Color.fadedBlack,
    marginBottom: 10,
  },
  ProductShortDesc: {
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    color: Color.gray,
    lineHeight: Dimensions.get('window').width > 500 ? 25 : 20,
  },
  sizeFontStyle: {
    marginRight: 20,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    color: Color.fadedBlack,
    fontWeight: '500',
  },
  sizeValue: {
    margin: 10,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    color: Color.gray,
  },
  sizeActiveValue: {
    backgroundColor: Color.primary,
    color: Color.white,
    padding: 10,
    borderRadius: 50,
  },
  Color: {
    width: 25,
    height: 25,
    borderRadius: 50,
    margin: 5,
  },
  ColorCode1: {
    backgroundColor: 'red',
  },
  ColorCode2: {
    backgroundColor: 'green',
  },
  ColorCode3: {
    backgroundColor: 'gold',
  },
});
