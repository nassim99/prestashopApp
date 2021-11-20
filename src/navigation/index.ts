import { Navigation, LayoutRoot } from 'react-native-navigation';
import Home from 'screens/home';
import Profile from 'screens/profile';

Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Home', () => Home);
Home.options = {
  topBar: {
    visible: false,
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

Profile.options = {
  topBar: {
    title: {
      text: 'Profile',
    },
  },
  bottomTab: {
    text: 'Profile',
  },
};

const MainAppRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      children: [
        {
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
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Profile',
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export default MainAppRoot;
