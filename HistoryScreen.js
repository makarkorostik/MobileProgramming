
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HistoryScreen({ route }) {
    const { calcdata } = route.params;

    return (

        <View style={styles.container}>
            <Text>History</Text>
            <View style={styles.historyItem}>
                {calcdata.length > 0 ? (
                    <FlatList
                        data={calcdata}
                        keyExtractor={(item, index) => index.toString}
                        renderItem={({ item, index }) => (
                            <Text style={styles.historyItem}>
                                {item}
                            </Text>
                        )}
                    />
                ) : (
                    <Text style={styles.historyItem}>No calculations were done</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    historyItem: {
        fontSize: 16,
        padding: 10,
        alignItems: 'center',
    },
});