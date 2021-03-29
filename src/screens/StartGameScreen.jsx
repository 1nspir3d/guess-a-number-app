import React from 'react';
import {
 View, Text, Button, StyleSheet,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constans/colors';
import Input from '../components/Input';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 20,
    },
    inputContainer: {
        maxWidth: 300,
        width: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 100,
    },

});

export default function StartGameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.screenTitle}>Start a New game!</Text>
            <Card style={styles.inputContainer}>
                <Input />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
}
