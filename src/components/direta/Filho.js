import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})