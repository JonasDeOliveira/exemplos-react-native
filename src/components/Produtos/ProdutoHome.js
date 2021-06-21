import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={props.imgUrlProduto} style={styles.image}/>
            <Text>{props.nomeProduto}</Text>
            <Text>{props.marcaProduto}</Text>
            <Text>R$ {props.precoProduto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 100,
        height: 100
    }
})