import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {

  const [est_number, setEst_number] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = useState(0);
  const [guessFeedback, setGuessFeedback] = useState('');

  const handleGuess = () => {

    const guessedNumber = parseInt(est_number);

    if (isNaN(guessedNumber)) {
      setGuessFeedback('Invalid Input. Please enter a valid number');
      return;
    }

    setCount(count+1);

    if(guessedNumber===randomNumber){
      Alert.alert(`You guessed the number in ${count} guesses`);
      setRandomNumber(() => Math.floor(Math.random() * 100) + 1);
      setCount(1);
    } else{
      setGuessFeedback(
        guessedNumber < randomNumber
          ? `Your guess ${guessedNumber} is too low`
          : `Your guess ${guessedNumber} is too high`
      );
      setEst_number('');
    }

  }




  return (
    <View style={styles.container}>
      <Text>{guessFeedback !== '' ? guessFeedback : 'Guess a number between 1-100'}</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter number'
      keyboardType='numeric'
      value={est_number}
      onChangeText={(text) => setEst_number(text)}
      />
      <View style={styles.buttonContainer}>
       <Button title='MAKE GUESS' onPress={handleGuess}/> 
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    
  }
});
