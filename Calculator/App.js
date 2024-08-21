import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(0);

  const calculate = (operator) => {

    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))) {
      Alert.alert('Invalid input', 'Please enter a Number');
    } else {

      if (operator === '+')
        setResult(parseFloat(value1) + parseFloat(value2));
      else if (operator === '-')
        setResult(parseFloat(value1) - parseFloat(value2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Result: {result.toFixed(2)}</Text>
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        textAlign='center'
        onChangeText={value1 => setValue1(value1)}
        value={value1} />
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        textAlign='center'
        onChangeText={value2 => setValue2(value2)}
        value={value2} />

      <View style={styles.buttons}>
        <Button
          title='+'
          onPress={() => calculate('+')} />
        <Button
          title='-'
          onPress={() => calculate('-')} />
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
    marginTop: 100,
  },
  inputBox: {
    borderWidth: 1,
    margin: 4,
    width: 100,
    height: 20,
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    width: 100,
    justifyContent: 'space-around',
  }
});
