import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {

    console.warn(props)
    // console.warn(props.calopsita)
    // console.warn(props.numero)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text>{props.descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        padding: 10
    },
    titulo: {
        fontWeight: 'bold'
    }
})