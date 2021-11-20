import React from 'react';
import { Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { navigate } from 'utils/navigate';

const Home: NavigationFunctionComponent = ({ componentId }: any) => {
  const handleNavigateProfile = () => {
    navigate({ screen: 'Profile', componentId, screenTitle: 'Profile' });
  };

  return (
    <View>
      <Text onPress={handleNavigateProfile}>Home screen</Text>
    </View>
  );
};

export default Home;
