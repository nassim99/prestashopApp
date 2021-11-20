import { Navigation, Options } from 'react-native-navigation';

interface navigateProps {
  screen: string;
  screenTitle: string;
  componentId: any;
  options?: Options;
}

export const navigate = ({ screen, componentId, options, screenTitle }: navigateProps) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      options: {
        topBar: {
          title: {
            text: screenTitle,
          },
        },
        ...options,
      },
    },
  });
};
