import React, {useState} from 'react';
import {Text, View, TextInput, ActivityIndicator} from 'react-native';

import Button from 'src/components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    const result = await loginWithEmailAndPassword({
      email,
      password,
    });
    if (result) {
      navigation.navigate('Home');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome,</Text>
      <Text style={styles.caption}>Glad to see you!</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button text="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

const loginWithEmailAndPassword = async payload => {
  const {email, password} = payload;

  await delay(1000);
  if (email === 'admin@example.com' && password === 'Test@123') {
    return true;
  }

  return false;
};

const delay = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

export default Login;
