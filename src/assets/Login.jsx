// Login.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://jisetidb.onrender.com/users', {
        username: username,
        password: password,
      });

      if (response.data && response.data.token) {
        // Navigate to another screen upon successful login
        navigation.navigate('Home'); // Replace 'Home' with your desired screen
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, show error to the user
      // Example: set an error state to display an error message
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
