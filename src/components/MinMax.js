import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => {
    console.warn(props)
    return (
        <Text style={styles.texto}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30
    }
})