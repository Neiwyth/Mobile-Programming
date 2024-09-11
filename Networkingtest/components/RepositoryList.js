import { FlatList, Text, View } from "react-native";


export default function RepositoryList({ repositories }) {


    return (
        <FlatList
            data={repositories}
            renderItem={({ item }) =>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.full_name}</Text>
                    <Text style={{ fontSize: 16 }}>{item.description}</Text>
                </View>
            } />
    );
}