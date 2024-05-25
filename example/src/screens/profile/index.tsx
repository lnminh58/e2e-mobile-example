import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
