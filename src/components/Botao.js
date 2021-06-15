import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <TouchableOpacity>
            <Text style={[styles.botao, {backgroundColor: props.back || '#000'}]}>
                {props.title || 'Comprar'}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})