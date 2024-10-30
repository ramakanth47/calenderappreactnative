import React from 'react';
import { Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const BiometricAuth = () => {
  const handleBiometricAuth = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (compatible && enrolled) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
      });

      if (result.success) {
        Alert.alert('Authenticated Successfully!');
      } else {
        Alert.alert('Authentication Failed!');
      }
    } else {
      Alert.alert('Biometric authentication not available or not enrolled');
    }
  };

  return <Button title="Authenticate with Biometric" onPress={handleBiometricAuth} />;
};

export default BiometricAuth;
