import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../components/TituloPrincipal'
import Endereco from '../components/checkout/Endereco'
import Frete from '../components/checkout/Frete'
import Pagamento from '../components/checkout/Pagamento'
import ProdutosPedido from '../components/checkout/ProdutosPedido'
import Botao from '../components/Botao'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal title="Checkout"/>
            <Endereco/>
            <Frete/>
            <Pagamento/>
            <ProdutosPedido/>
            <Botao back='#32D025' title='Finalizar Pedido'/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})