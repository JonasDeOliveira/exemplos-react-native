import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default props => {

    console.warn(props.funcao)

    function quandoTocar() {
        //passando dados para uma função que está no pai
        props.funcao(20, 'O valor eh: ')
    }

    return (
        <View style={styles.container}>
            <Button title="Executar" 
                onPress={quandoTocar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})