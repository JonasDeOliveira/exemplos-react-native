import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <Text style={styles.container}>
           {props.nome} {props.sobrenome}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})