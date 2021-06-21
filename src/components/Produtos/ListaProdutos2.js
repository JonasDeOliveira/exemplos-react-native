import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import respProdutosHome from './response/respProdutosHome'
import ProdutoHome from './ProdutoHome'

export default props => {

    const produtoRender = ({item}) => {
        return (
            <ProdutoHome 
                imgUrlProduto={item.imgUrl} 
                nomeProduto={item.nome} 
                marcaProduto={item.marca}
                precoProduto={item.preco} />
        )
    }

    return (
        <View style={styles.container}>
            <Text>Lista de Produto FlatList</Text>
            <FlatList 
                data={respProdutosHome} 
                keyExtractor={i => `${i.id}`} 
                renderItem={produtoRender}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})