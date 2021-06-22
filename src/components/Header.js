import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name='bars' size={40}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='google' size={40}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='shopping-cart' size={40}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 75,
        padding: 25,
        justifyContent: 'space-between',
        borderBottomWidth: 5,
        borderStyle: 'solid',
        borderBottomColor: '#000'
    }
})