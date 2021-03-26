import React from 'react'
import { View, Text, TextInput, Button ,StyleSheet } from 'react-native'

export default function StartGameScreen() {
    return(
        <View style={styles.screen}>
            <Text style={styles.screenTitle}>Start a New game!</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} />
                <View style={styles.buttonContainer} >
                    <Button title="Reset" color={'red'}/>
                    <Button title="Start"/>                    
                </View>
            </View>
        </View>
    )
}

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
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: .4,
        backgroundColor: 'white',
        elevation: 22,
        padding: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 35,
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})