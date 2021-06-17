import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ButtonProps from '../ButtonProps'

export default props => {

    function getPrice(promotion) {
        //if ternario
        // condicao ? se for true : se for false
        return (
            promotion ? 
            <>
                <Text style={styles.oldPrice}>{`De: R$${props.oldPrice}`}</Text>
                <Text style={styles.price}>{`Por: R$${props.price}`}</Text>
            </> :
            <Text style={styles.price}>{`R$${props.regularPrice}`}</Text>
        )

        //if normal
        // if (promotion) {
        //     return (
        //         <>
        //             <Text style={styles.oldPrice}>{`De: R$${props.oldPrice}`}</Text>
        //             <Text style={styles.price}>{`Por: R$${props.price}`}</Text>
        //         </>
        //     )
        // } else {
        //     return (
        //         <Text style={styles.price}>{`R$${props.regularPrice}`}</Text>
        //     )
        // }
    }

    function addToCart() {
        console.warn('add to cart')
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.img} style={styles.image}/>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.brand}>{props.brand}</Text>
            {getPrice(props.promotion)}
            <ButtonProps titulo="Add to cart"
                funcao={addToCart}/>
            {/* <ButtonProps titulo="Add to cart" 
                funcao={() => console.warn('add to cart')}/> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        width: '40%',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    brand: {
        fontSize:16,
        color: 'tomato'
    },
    oldPrice: {
        color:'#aaa',
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through'
    },
    price: {
        fontSize: 16,
        fontWeight:'bold'
    }
})