import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, StyleSheet } from 'react-native'

export default function Input(props) {
    return(
        <TextInput style={{...styles.input, ...props.style}} />
    )
}

Input.propTypes = {
    style: PropTypes.object
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 35,
        paddingHorizontal: 15,
        marginVertical: 15,
    }
})