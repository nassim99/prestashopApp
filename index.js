import { Navigation } from 'react-native-navigation';

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';
import App from './App';
import Home from 'screens/home';
import Profile from 'screens/profile';

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Profile', () => Profile);
