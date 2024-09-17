import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Text, Image, ActivityIndicator } from 'react-native';
import fetchRepositories from './api';

export default function App() {
  const [searchword, setSearchword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    fetchRepositories(searchword)
      .then(data => setResults(data.meals))
      .catch(err => console.error(err))
      .finally(() => {
        setSearchword('');
        setLoading(false);
      })
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type here...'
        value={searchword}
        onChangeText={text => setSearchword(text)}
      />

      <Button disabled={loading} title='Find' onPress={handleFetch} />
      <ActivityIndicator size='large' animating={loading} />

      <FlatList
        style={{ width: '99%' }}
        data={results}
        renderItem={({ item }) =>
          <View style={{ margin: 10 }}>
            <Text style={{ marginBottom: 10 }}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={{ width: 100, height: 100 }} />
          </View>} />
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
    marginTop: 50,
  },
});
