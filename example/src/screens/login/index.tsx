import React, {useState} from 'react';
import {Text, View, TextInput, ActivityIndicator, Pressable} from 'react-native';

import Button from '../../components/Button';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {getTestIdProps} from '../../utils/test';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
      setError('');
    } else {
      setError('Unable to login');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome,</Text>
      <Text style={styles.caption} {...getTestIdProps('txt_welcome_caption')}>
        Glad to see you!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="email"
        placeholderTextColor="#40739e8c"
        {...getTestIdProps('input_email')}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        placeholder="password"
        placeholderTextColor="#40739e8c"
        {...getTestIdProps('input_password')}
      />
      {!!error && (
        <Text style={styles.error} {...getTestIdProps('txt_login_error')}>
          {error}
        </Text>
      )}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          text="Login"
          onPress={handleLogin}
          {...getTestIdProps('btn_submit')}
        />
      )}
    </View>
  );
};

const loginWithEmailAndPassword = async payload => {
  const {email, password} = payload;

  await delay(1000);
  if (email === 'test@example.com' && password === 'Test@123') {
    return true;
  }

  return false;
};

const delay = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

export default Login;
