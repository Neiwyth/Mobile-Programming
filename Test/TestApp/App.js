import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState('');

  const handlePress = () => {
    Alert.alert('Alert', 'You typed: ' + msg);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 25, color: 'tomato' }}>Hello World!</Text> */}
      <TextInput
        placeholder='Type here'
        onChangeText={text => setMsg(text)} />
      <Button
        color='green'
        title='Press me'
        onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
