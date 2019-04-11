import { createStackNavigator, createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(
  ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer']
);

import Login from './src/Login';
import Home from './src/Home';

const Navegador = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
