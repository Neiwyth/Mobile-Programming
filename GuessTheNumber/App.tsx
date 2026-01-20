import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [text, setText] = useState('Guess a number between 1 - 100');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [counter, setCounter] = useState(1);

  const checkGuess = () => {

    if (isNaN(parseInt(guess))) {
      setText('Please enter a number');
    } else {

      if (randomNumber === parseInt(guess)) {
        Alert.alert(`You guessed the number in ${counter} tries`);
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        setText('Guess a number between 1 - 100');
        setCounter(1);
      } else if (randomNumber > parseInt(guess)) {
        setText(`Your guess ${guess} is too low`);
        setCounter(counter => counter + 1);
      } else if (randomNumber < parseInt(guess)) {
        setText(`Your guess ${guess} is too high`);
        setCounter(counter => counter + 1);
      }
    }
  }


  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        textAlign='center'
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />

      <View style={styles.button}>
        <Button
          title='Guess'
          onPress={checkGuess}
        />
      </View>
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
  inputBox: {
    borderWidth: 1,
    margin: 4,
    width: 50,
    height: 40,
  },
  button: {
    marginTop: 10,
  },
});
