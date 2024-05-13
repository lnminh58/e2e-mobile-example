import React from 'react';
import {Text, View} from 'react-native';

import Button from 'src/components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Profile Screen</Text>
    </View>
  );
};

export default Home;
