import { Navigation } from 'react-native-navigation';

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';
import App from './App';

import MainAppRoot from 'navigation/index';

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(MainAppRoot);
});
