import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';



export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [calculations, setCalculations] = useState([]);


  const addCalculation = (num1, operator, num2, result) => {
    setCalculations([...calculations, `${num1} ${operator} ${num2} = ${result}`]);
  }

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    addCalculation(num1, '+', num2, sum);
  };

  const handleSubtraction = () => {
    const differnce = parseFloat(num1) - parseFloat(num2);
    setResult(differnce);
    addCalculation(num1, '-', num2, differnce);
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
      <FlatList
      data={calculations}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
        <Text>{item}</Text>
        }
        />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
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
  result: {
    fontSize: 25,
    textAlign: 'center', 
    marginBottom: 10,     
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200, 
    marginBottom: 10, 
  }
});