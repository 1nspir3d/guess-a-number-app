import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 35,
        paddingHorizontal: 15,
        marginVertical: 15,
    },
});

export default function Input({ style }) {
    return (
        <TextInput style={{ ...styles.input, ...style }} />
    );
}
