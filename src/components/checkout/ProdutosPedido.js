import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import TituloPrincipal from '../TituloPrincipal'
import ProdutoHome from '../Produtos/ProdutoHome'

export default props => {

    const produtoPedido = [
        {
            id: 1, 
            nome: 'Last of Us 2', 
            marca: 'Ubisoft',
            preco: 249.90,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png'
        },
        {
            id: 2, 
            nome:'Caderno',
            marca: 'tilibra',
            preco: 19.99,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51LBWQZuuyL._AC_SY355_.jpg'
        }
    ]

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
            <TituloPrincipal title="Produtos do pedido"/>
            <FlatList
                data={produtoPedido}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})