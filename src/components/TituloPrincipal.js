import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center"
    },
    tituloPrincipal: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center'
    }
})