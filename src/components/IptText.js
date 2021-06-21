import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}:</Text>
            <TextInput placeholder={props.placeholder} style={styles.inputTxt}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    label: {
        fontSize: 20,
        color: '#615b5a'
    },
    inputTxt: {
        backgroundColor: '#eee',
        height: 45 
    }


})