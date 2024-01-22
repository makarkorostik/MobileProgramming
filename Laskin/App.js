import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';



export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const differnce = parseFloat(num1) - parseFloat(num2);
    setResult(differnce);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result:{result}</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter number'
        keyboardType='numeric'
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter number'
        keyboardType='numeric'
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title='+' onPress={handleAddition} />
        <Button title='-' onPress={handleSubtraction} />
      </View>
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
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 200,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 25
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    
  }
});
