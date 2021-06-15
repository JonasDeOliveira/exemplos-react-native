import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <>
            <Text style={styles.tituloPrincipal}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </>
        
    )
}

const styles = StyleSheet.create({
    tituloPrincipal: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'blue',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    }
})