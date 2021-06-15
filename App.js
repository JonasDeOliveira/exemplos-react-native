import React from 'react'
import { Text, StyleSheet, View, SafeAreaView,
          TouchableOpacity } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './src/components/Multi'
import Botao from './src/components/Botao'
import TituloPrincipal from './src/components/TituloPrincipal'
import Header from './src/components/Header'

export default () => {
  return (
    <SafeAreaView>
      <Header/>
      <TituloPrincipal title="Home" subtitle="seja bem vindo"/>
      <TituloPrincipal title="Produtos"/>
      <TituloPrincipal title="Carrinho"/>
      <Botao title="Add to cart" back="#066922"/>
      <Botao title="Comprar" back="#066922"/>
      <Botao title="Finalizar compra" back="#066922"/>
      <Botao title="Cadastrar" back="grey"/>
      <Botao title="Cadastrar" />
      <View style={style.App}>
        <Text style={[style.txtG, style.txtBranco]}>Iniciando com estilos</Text>
    </View>
    </SafeAreaView>
    
    
  )
  /*<Component2/>
  <Primeiro/>*/
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#A00'
  },
  txtG: {
    fontSize: 30,
  },
  txtBranco: {
    color: '#fff'
  },
})

 
