import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import { HomeScreen, AboutScreen, ContactScreen } from './components';


// @TODO: get rid of this when React-Native version .56 is released
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
    },
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      title: 'Contact',
    },
  },
},
{
  initialRouteName: 'Home',
});

export default RootStack;
