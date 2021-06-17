import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Filho from './Filho'

export default props => {
    let x = 13
    let y = 100

    return (
        <View style={styles.container}>
            <Filho a={x} b={y}/>
            <Filho a={x + 20} b={y + 30}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})