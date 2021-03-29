import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constans/colors';

const styles = StyleSheet.create({
    number: {
        color: Colors.primary,
        fontSize: 25,
    },
    numberContainer: {
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        padding: 7,
        marginVertical: 10,
        borderColor: Colors.primary,
    },
});

export default function NumberContainer() {
  const number = useSelector((state) => state.selectedNumberReducer);
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}
