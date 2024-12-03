import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import styles from '@styles/splash/SplashScreen.styles';
import useAuthRedirect from '@hooks/splashscreen/useAuthRedirect';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp<any>>();

  useAuthRedirect(navigation);

  return (
    <View style={styles.container}>
      <Image
        source={require('@images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
