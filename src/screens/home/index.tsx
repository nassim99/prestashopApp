import React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const Home: React.FC = (props: any) => {
  return (
    <View>
      <Text
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Profile',
              options: {
                topBar: {
                  title: {
                    text: 'Profile',
                  },
                },
              },
            },
          })
        }>
        Home screen
      </Text>
    </View>
  );
};

export default Home;
