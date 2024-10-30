import React from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';
import CustomCalendar from '../components/CustomCalendar';
import BiometricAuth from '../components/Biometric';
import SavePassword from '../components/SavePassword';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar />
      <BiometricAuth />
      <SavePassword />
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
