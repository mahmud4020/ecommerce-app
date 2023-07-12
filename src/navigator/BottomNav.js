import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyCart" component={MyCart} />
    </Tab.Navigator>
  );
}
export default BottomNav;
