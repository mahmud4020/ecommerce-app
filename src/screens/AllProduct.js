import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Color} from './Colors';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AllProduct = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: Color.white}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={styles.SingleProduct}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 3,
            }}>
            <Text style={styles.productrate}>$55</Text>
            <Image
              style={{
                width: Dimensions.get('window').width / 2 - 15,
                height: 130,
              }}
              source={require('../img/8.png')}
              resizeMode="contain"
            />

            <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
              <Icon name="heart" size={wp('4%')} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.productShortDesc}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate('ProductDetails')}>
                <Text style={styles.btnText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SingleProduct}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 3,
            }}>
            <Text style={styles.productrate}>$55</Text>
            <Image
              style={{
                width: Dimensions.get('window').width / 2 - 15,
                height: 130,
              }}
              source={require('../img/9.png')}
              resizeMode="contain"
            />

            <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
              <Icon name="heart" size={wp('4%')} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.productShortDesc}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SingleProduct}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 3,
            }}>
            <Text style={styles.productrate}>$55</Text>
            <Image
              style={{
                width: Dimensions.get('window').width / 2 - 15,
                height: 130,
              }}
              source={require('../img/8.png')}
              resizeMode="contain"
            />

            <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
              <Icon name="heart" size={wp('4%')} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.productShortDesc}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.SingleProduct}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 3,
            }}>
            <Text style={styles.productrate}>$55</Text>
            <Image
              style={{
                width: Dimensions.get('window').width / 2 - 15,
                height: 130,
              }}
              source={require('../img/10.png')}
              resizeMode="contain"
            />

            <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
              <Icon name="heart" size={wp('4%')} color={Color.red} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.productShortDesc}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  SingleProduct: {
    width: Dimensions.get('window').width / 2 - 10,
    borderWidth: 1,
    borderColor: Color.lightgray,
    backgroundColor: Color.white,
    elevation: 3,
    shadowColor: Color.black,
    justifyContent: 'center',
    margin: 5,
  },
  productrate: {
    position: 'absolute',
    left: 5,
    top: 5,
    fontSize: wp('3%'),
    fontWeight: '500',
    color: Color.gray,
  },
  productShortDesc: {
    textAlign: 'center',
    fontSize: hp('1.5%'),
    fontWeight: '400',
    color: Color.gray,
    paddingHorizontal: 8,
    lineHeight: hp('3%'),
  },
  btnContainer: {
    backgroundColor: Color.primary,
    padding: 5,
    width: '70%',
  },
  btnText: {
    fontSize: hp('1.5%'),
    color: Color.white,
    textAlign: 'center',
  },
});
