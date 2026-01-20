import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState('');


  const calculate = (operator: '+' | '-') => {
    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))) {
      Alert.alert('Invalid input', 'Please enter a number')
    } else {

      setOperator(operator)

      if (operator === '+') {
        setResult(parseFloat(value1) + parseFloat(value2));
      }
      else if (operator === '-') {
        setResult(parseFloat(value1) - parseFloat(value2));
      }
    }
  };



  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8, fontSize: 20 }}>Result: {result}</Text>
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        textAlign='center'
        onChangeText={value1 => setValue1(value1)}
        value={value1}
      />
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        textAlign='center'
        onChangeText={value2 => setValue2(value2)}
        value={value2}
      />

      <View style={styles.buttons}>
        <Button
          title='+'
          onPress={() => calculate('+')}
        />
        <Button
          title='-'
          onPress={() => calculate('-')}
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
    paddingTop: 50,
  },
  inputBox: {
    borderWidth: 1,
    margin: 4,
    width: 125,
    height: 40,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 130,
    height: 35,
    marginTop: 5,
    justifyContent: 'space-around',
  },
});
