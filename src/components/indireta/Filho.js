import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default props => {

    function gerarNumero() {
        return Math.random()
    }
    console.warn(props)

    return (
        <View style={styles.container}>
            <Button title="Executar" 
                onPress={function () {
                        //armazena um retorno de uma função em uma constante
                        const novoNumero = gerarNumero()
                        //passando dados para uma função que está no pai
                        props.funcao(novoNumero, 'O valor eh: ')
                    }
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})