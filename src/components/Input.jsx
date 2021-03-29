import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
});

export default function Input(props) {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    );
}
