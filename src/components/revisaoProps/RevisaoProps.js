import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AvaliacaoProduto from './AvaliacaoProduto'

export default props => {
    return (
        <View style={styles.container}>
            {/* <AvaliacaoProduto calopsita="Produto bom!" numero={10}
                podePostar={true}/> */}
            <AvaliacaoProduto titulo="Produto bom!" 
                descricao="produto bom, poderia ser melhor, eh bom"/>

            <AvaliacaoProduto titulo="Legalzinho!" 
                descricao="até que não eh ruim"/>
                
            <AvaliacaoProduto titulo="Legalzinho!" 
                descricao="até que não eh ruim"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})