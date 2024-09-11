import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import RepositoryList from './components/RepositoryList';
import fetchRepositories from './api';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    fetchRepositories(keyword)
      .then(data => setRepositories(data.items))
      .catch(err => console.error(err))
      .finally(() => {
        setKeyword('');
        setLoading(false);
      })
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.normalText}
        placeholder='Type keyword here...'
        value={keyword}
        onChangeText={text => setKeyword(text)}
      />
      <Button
        disabled={loading} title='Search' onPress={handleFetch} />
      <ActivityIndicator size='large' animating={loading} />
      <RepositoryList repositories={repositories} />
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
  normalText: {
    fontSize: 18,
  },
});
