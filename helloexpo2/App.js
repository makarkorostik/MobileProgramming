import { StatusBar, Alert, TextInput } from 'react-native';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[message, setMessage] = useState('');
  
  
  const showAlert = () => {
    Alert.alert('Hello', 'Syötit tekstin: ' + message);
  }
  
  
  
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Syötä tekstiä'
      onChangeText={text => setMessage(text)}
      />
      <Button title="Press me" onPress={showAlert} color="green"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
