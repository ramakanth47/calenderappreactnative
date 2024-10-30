import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SavePassword: React.FC = () => {
  const [password, setPassword] = useState('');

  const savePassword = async () => {
    try {
      await SecureStore.setItemAsync('userPassword', password);
      Alert.alert('Password saved securely!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save password!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Save Password" onPress={savePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SavePassword;
