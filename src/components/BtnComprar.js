import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default () => {
    return (
        <TouchableOpacity>
            <Text style={styles.btnComprar}>Comprar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnComprar: {
        backgroundColor: '#29e45e',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})