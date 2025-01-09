import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MemoText from './src/MemoText';


const App = () => {
  const [type,setype]= useState<any>(0)
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }}>
 
      
  <Text style={{fontSize:20}}>Hello</Text>
<MemoText></MemoText>
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

