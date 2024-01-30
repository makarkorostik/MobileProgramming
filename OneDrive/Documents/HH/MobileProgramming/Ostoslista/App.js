import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const handleAddition = () => {
    setData([...data, { key: text }]);
    setText('');
  };

  const handleCleaning = () => {
    setData([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='purchase'
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={handleAddition} />
        <Button title='Clear' onPress={handleCleaning} />
      </View>
      <Text style={styles.shoppinglist}>Shopping List</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
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
    width: 200,
    marginBottom: 10,
  },
  shoppinglist: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  }
});
