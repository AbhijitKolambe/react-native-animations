import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
 
      
  <Text>Hello</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;

