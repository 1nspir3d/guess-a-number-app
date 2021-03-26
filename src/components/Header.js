import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{'Guess the number!'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'pink',
        paddingTop: 60,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center'
    }
})