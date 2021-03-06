import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constans/colors';

const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: `${Colors.primary}`,
        paddingTop: 60,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'reggae-one',
    },
});

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Guess the number!</Text>
        </View>
    );
}
