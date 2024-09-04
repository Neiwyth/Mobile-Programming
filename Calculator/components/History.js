import { FlatList, StyleSheet, Text, View } from "react-native";




export default function History({ route }) {

    const { history } = route.params;


    return (

        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={styles.list}>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>History:</Text>
                <FlatList
                    data={history}
                    renderItem={({ item }) => <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>{item}</Text>
                    </View>} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    list: {
        margin: 20,
        alignItems: 'center',
    },
});