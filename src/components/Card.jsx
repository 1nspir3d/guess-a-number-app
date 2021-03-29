import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.4,
        backgroundColor: 'white',
        elevation: 22,
        padding: 20,
        borderRadius: 5,
    },
});

export default function Card({ children, style }) {
    return (
        <View style={{ ...styles.inputContainer, ...style }}>
            {children}
        </View>
    );
}
