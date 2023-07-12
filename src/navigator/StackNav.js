import * as React from 'react';
import {View, Text, alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SigninScreen';
import Splash from '../screens/Splash';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import VerifyCodeScreen from '../screens/verifyCodeScreen';
import NewPassScreen from '../screens/NewPassScreen';
import CongratsScreen from '../screens/CongratsScreen';
import Home from '../screens/Home';
import {Color} from '../screens/Colors';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {TouchableOpacity} from 'react-native';
import AllProduct from '../screens/AllProduct';
import ProductDetails from '../screens/ProductDetails';
import Toptab from '../screens/Toptab';
import Review from '../screens/Review';
import Description from '../screens/Description';
import ProductStack from '../screens/Product/ProductStack';
import OrderList from '../screens/OrderList';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentSuccess from '../screens/PaymentSuccess';
import BottomNav from './BottomNav';
import ExtraPages from '../screens/ExtraPages';
import MyCart from '../screens/MyCart';
import Profile from '../screens/Profile';
import EditBillingAddress from '../screens/EditBillingAddress';
import EditShippingAddress from '../screens/EditShippingAddress ';
import MyOrders from '../screens/MyOrders';
import EditmainAddress from '../screens/EditmainAddress ';
import SearchFilter from '../screens/SearchFilter';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            title: 'Log in Screen',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ForgotPassScreen"
          component={ForgotPassScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="NewPassScreen"
          component={NewPassScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Toptab" component={Toptab} />

        <Stack.Screen
          name="CongratsScreen"
          component={CongratsScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackVisible: false,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="AllProduct"
          component={AllProduct}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="ProductStack"
          component={ProductStack}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccess}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="ExtraPages"
          component={ExtraPages}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="EditBillingAddress"
          component={EditBillingAddress}
          options={{
            // headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="EditShippingAddress"
          component={EditShippingAddress}
          options={{
            // headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            // headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="EditmainAddress"
          component={EditmainAddress}
          options={{
            // headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />

        <Stack.Screen
          name="SearchFilter"
          component={SearchFilter}
          options={{
            // headerBackVisible: false,
            headerTintColor: Color.white,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 8}}>
                  <Icon name="search1" size={30} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon name="heart" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Color.primary},
            headerTitleStyle: {color: Color.white},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
