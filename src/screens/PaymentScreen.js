import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from './Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentScreen = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Color.white,
        alignItems: 'center',
      }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Delivery Address</Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: Color.lightgray,
              padding: 8,
            }}>
            <Text style={styles.addressText}>Deliver To: Tom Hardy</Text>
            <Text style={styles.addressText}>+888 8754124</Text>
            <Text style={styles.addressText}>admin@gmail.com</Text>
            <Text
              style={[styles.addressText, {color: Color.gray, marginTop: 8}]}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without
            </Text>
          </View>

          <Text style={[styles.mainTitle, {marginTop: 20, marginBottom: 5}]}>
            Amount Details
          </Text>
          <View style={styles.amountData}>
            <View style={styles.amountTxtcontainer}>
              <Text style={styles.amountTxt}>Total Product</Text>
              <Text style={styles.amountTxt}>5</Text>
            </View>

            <View style={styles.amountTxtcontainer}>
              <Text style={styles.amountTxt}>sub Total</Text>
              <Text style={styles.amountTxt}>$50</Text>
            </View>

            <View style={styles.amountTxtcontainer}>
              <Text style={styles.amountTxt}>Shipping </Text>
              <Text style={styles.amountTxt}>$5</Text>
            </View>

            <View style={[styles.amountTxtcontainer, {borderBottomWidth: 0}]}>
              <Text style={[styles.amountTxt, {color: Color.black}]}>
                Total
              </Text>
              <Text style={[styles.amountTxt, {color: Color.black}]}>$500</Text>
            </View>
          </View>
          <Text style={[styles.mainTitle, {marginTop: 20, marginBottom: 5}]}>
            Payment Method
          </Text>

          <View style={styles.amountData}>
            <View style={styles.amountTxtcontainer}>
              <Icon
                name="cc-paypal"
                size={Dimensions.get('window').width > 500 ? 40 : 30}
                color={Color.black}
              />
              <Text
                style={[
                  styles.amountTxt,
                  {width: Dimensions.get('window').width > 500 ? '85%' : '80%'},
                ]}>
                admin@gmail.com
              </Text>
            </View>
            <View style={styles.amountTxtcontainer}>
              <Icon
                name="cc-visa"
                size={Dimensions.get('window').width > 500 ? 40 : 30}
                color={Color.black}
              />
              <Text
                style={[
                  styles.amountTxt,
                  {width: Dimensions.get('window').width > 500 ? '85%' : '80%'},
                ]}>
                *** *** *** 45454
              </Text>
            </View>
            <View style={[styles.amountTxtcontainer, {borderBottomWidth: 0}]}>
              <Icon
                name="cc-mastercard"
                size={Dimensions.get('window').width > 500 ? 40 : 30}
                color={Color.black}
              />
              <Text
                style={[
                  styles.amountTxt,
                  {width: Dimensions.get('window').width > 500 ? '85%' : '80%'},
                ]}>
                *** *** *** 1111
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
              <Text style={styles.promoBtn}>Any Promo Code?</Text>
            </TouchableOpacity>

            {shouldShow ? (
              <TextInput
                placeholder="enter your promo code"
                placeholderTextColor={Color.gray}
                style={styles.promoInput}
              />
            ) : null}
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnwrapper}
            onPress={() => navigation.navigate('PaymentSuccess')}>
            <Text style={styles.btnTxt}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    elevation: 8,
    shadowColor: Color.black,
    backgroundColor: Color.white,
    padding: 20,
    paddingHorizontal: 10,
    marginVertical: 30,
    justifyContent: 'center',
  },
  mainTitle: {
    color: Color.black,
    fontSize: Dimensions.get('window').width > 500 ? 25 : 17,
    marginBottom: 20,
    fontWeight: '500',
  },
  addressText: {
    color: Color.black,
    fontSize: Dimensions.get('window').width > 500 ? 18 : 12,
    marginBottom: 3,
  },
  amountData: {
    borderWidth: 1,
    borderColor: Color.lightgray,
    padding: 8,
  },
  amountTxtcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: Color.lightgray,
  },
  amountTxt: {
    fontSize: Dimensions.get('window').width > 500 ? 18 : 12,
    color: Color.gray,
  },
  promoBtn: {
    backgroundColor: Color.lightgray,
    color: Color.black,
    textAlign: 'center',
    padding: 8,
    borderRadius: 5,
  },
  promoInput: {
    borderWidth: 1,
    color: Color.black,
    height: 40,
    lineHeight: 25,
    padding: 10,
    borderColor: Color.lightgray,
    marginTop: 8,
    textAlign: 'center',
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
    fontSize: wp('3%'),
    padding: 8,
  },
});
