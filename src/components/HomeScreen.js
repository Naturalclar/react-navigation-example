// @flow
import React from 'react';
import { Text, View, Button } from 'react-native';
import {
  type NavigationScreenProp,
  type NavigationStateRoute,
} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>,
};

const HomeScreen = (props:Props) => (
  <View>
    <Text>
      Home
    </Text>
    <Button
      title="About Me"
      onPress={() => {
        const { navigation } = props;
        navigation.navigate('About');
      }}
    />
    <Button
      title="Contact Me"
      onPress={() => {
        const { navigation } = props;
        navigation.navigate('Contact');
      }}
    />
  </View>
);

export default HomeScreen;
