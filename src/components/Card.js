import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet} from 'react-native'

export default function Card(props) {
    return(
        <View style={{...styles.inputContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

Card.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object
}

const styles = StyleSheet.create({
    inputContainer: {
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: .4,
        backgroundColor: 'white',
        elevation: 22,
        padding: 10,
        borderRadius: 5,
    },
})