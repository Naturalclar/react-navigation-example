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

const ContactScreen = (props:Props) => (
  <View>
    <Text>
      Contact Me
    </Text>
    <Button
      title="Back to Home"
      onPress={() => {
        const { navigation } = props;
        navigation.navigate('Home');
      }}
    />
  </View>
);

export default ContactScreen;
