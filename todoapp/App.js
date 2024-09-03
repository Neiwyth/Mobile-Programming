import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Text } from 'react-native';
import EmptyListComponent from './emptyListComponent';
import itemSeparator from './itemSeparatorComponent';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handlePress = () => {
    setTodos([todo, ...todos]);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '75%' }}>
        <TextInput
          placeholder='Enter new todo'
          onChangeText={text => setTodo(text)}
          value={todo} />

        <Button
          title='Add'
          onPress={handlePress} />
        <StatusBar style="auto" />
      </View>
      <FlatList style={{ marginTop: 20 }}
        data={todos}
        ListEmptyComponent={EmptyListComponent}
        ItemSeparatorComponent={itemSeparator}
        renderItem={({ item }) =>
          <View style={styles.listItem}>
            <Text style={styles.standardText}>{item}</Text>
          </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  standardText: {
    fontSize: 24,
  },
  listItem: {
    backgroundColor: 'tomato',
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: 'center'
  },
});
