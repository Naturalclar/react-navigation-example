// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {
  type NavigationScreenProp,
  type NavigationStateRoute,
} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>,
};

const styles = StyleSheet.create({
  aboutViewStyle: {
    marginTop: 5,
  },
  aboutBodyStyle: {
    marginLeft: 15,
    marginRight: 15,
  },
});

const AboutScreen = (props:Props) => (
  <View
    style={styles.aboutViewStyle}
  >
    <Text
      style={styles.aboutBodyStyle}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Nostrum magni doloribus soluta molestias laudantium temporibus
      libero rem eveniet, modi autem animi cum vero repellendus!
      Adipisci, vel nobis? Atque, laborum recusandae.
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

export default AboutScreen;
