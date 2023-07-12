import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Color} from './Colors';
import {StatusBar} from 'react-native';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Home = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryPress = category => {
    setActiveCategory(prevCategory =>
      prevCategory === category ? null : category,
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: Color.white}}>
      <StatusBar backgroundColor={Color.primary} />

      <View
        style={{
          alignItems: 'center',
          marginTop: -4,
          width: Dimensions.get('window').width,
        }}>
        <Swiper
          showsButtons={false}
          style={{height: hp('30%')}}
          dotStyle={{marginTop: 50}}
          activeDotStyle={{
            marginTop: 50,
            backgroundColor: Color.primary,
          }}>
          <View style={styles.slide1}>
            <Image
              style={{
                width: wp('100%'),
                height: hp('30%'),
              }}
              source={require('../img/5.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{
                width: wp('100%'),
                height: hp('30%'),
              }}
              source={require('../img/6.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{
                width: wp('100%'),
                height: hp('30%'),
              }}
              source={require('../img/7.png')}
              resizeMode="stretch"
            />
          </View>
        </Swiper>
      </View>

      <View>
        <Text style={styles.categoryTitle}>Category</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            onPress={() => handleCategoryPress('mens')}
            style={[
              styles.categoryOption,
              activeCategory === 'mens' && styles.activeCategoryOption,
            ]}>
            <Text
              style={[
                styles.categoryOptionTitle,
                activeCategory === 'mens' && styles.activeCategoryOptionTitle,
              ]}>
              Mens Cloth
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCategoryPress('womens')}
            style={[
              styles.categoryOption,
              activeCategory === 'womens' && styles.activeCategoryOption,
            ]}>
            <Text
              style={[
                styles.categoryOptionTitle,
                activeCategory === 'womens' && styles.activeCategoryOptionTitle,
              ]}>
              Womens Cloth
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCategoryPress('childrens')}
            style={[
              styles.categoryOption,
              activeCategory === 'childrens' && styles.activeCategoryOption,
            ]}>
            <Text
              style={[
                styles.categoryOptionTitle,
                activeCategory === 'childrens' &&
                  styles.activeCategoryOptionTitle,
              ]}>
              Childrens Cloth
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.categoryTitle}>Recommended Product</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllProduct')}>
            <Text
              style={[
                styles.categoryTitle,
                {color: Color.primary, fontSize: 15},
              ]}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

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
                  width: Dimensions.get('window').width / 2,
                  height: 130,
                }}
                source={require('../img/8.png')}
                resizeMode="contain"
              />

              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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
                  <Text
                    onPress={() => navigation.navigate('ProductStack')}
                    style={styles.btnText}>
                    Buy Now
                  </Text>
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

              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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

              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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

              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('ExtraPages')}>
          <Text style={styles.btnText}>Extra pages</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  slide1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  categoryTitle: {
    padding: 8,
    fontSize: Dimensions.get('window').width > 500 ? 25 : 18,
    fontWeight: '500',
    color: Color.fadedBlack,
  },
  categoryOptionTitle: {
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    padding: 8,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: Color.lightgray,
    // margin: 5,
    textAlign: 'center',
    color: Color.gray,
  },

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
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    fontWeight: '400',
    color: Color.gray,
    paddingHorizontal: 8,
  },
  btnContainer: {
    backgroundColor: Color.primary,
    padding: 5,
    width: '70%',
  },
  btnText: {
    fontSize: Dimensions.get('window').width > 500 ? 18 : 14,
    color: Color.white,
    textAlign: 'center',
  },

  categoryOption: {
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  activeCategoryOption: {
    backgroundColor: Color.primary,
  },

  activeCategoryOptionTitle: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
