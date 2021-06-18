import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default (props) => {
    return (
        <View style={styles.container}>
            <Text>O resultado é:</Text>
            {props.num % 2 == 0
                ? <Text>Par</Text>
                : <Text>Impar</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})