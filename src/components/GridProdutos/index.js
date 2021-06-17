import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Produto from './Produto'
import TituloPrincipal from '../TituloPrincipal'
import ImgProduto from '../../../assets/produtos/caneta.jpg'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal title="Melhores Ofertas" subtitle="Você encontra aqui"/>
           <Produto img={ImgProduto} name="Caneta" brand="bic"
                oldPrice="5,00" price="3,00" regularPrice="4,00"
                promotion={false}/>
            <Produto img={ImgProduto} name="Caneta" brand="bic"
                oldPrice="5,00" price="3,00" regularPrice="4,00"
                promotion={true}/>
            <Produto img={ImgProduto} name="Caneta" brand="bic"
                oldPrice="5,00" price="3,00" regularPrice="4,00"
                promotion={false}/>
            <Produto img={ImgProduto} name="Caneta" brand="bic"
                oldPrice="5,00" price="3,00" regularPrice="4,00"
                promotion={true}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})