import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import respProduto from './response/respProduto'

export default props => {

    function obterLista() {
        return respProduto.map(p => {
            return (
                <Text key={p.id}>
                    {p.id} {p.nome} R$ {p.preco}
                </Text>
            )
        }) 
    }

    return (
        <View style={styles.container}>
            <Text>Lista de Produto</Text>
            {obterLista()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})