import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const MemoText = () => {
  const [type,setype]= useState<any>(0)

  const test = (t:string)=>{
console.log(t)
  }
  test('hello')
  return (
    <SafeAreaView style={styles.container}>
 
      
  <Text style={{color:'red'}}>MemoText</Text>

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

export default MemoText;

