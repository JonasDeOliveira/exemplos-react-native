import React from 'react'
import { Text, StyleSheet, View, SafeAreaView,
          TouchableOpacity } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './src/components/Multi'
// import Botao from './src/components/Botao'
// import TituloPrincipal from './src/components/TituloPrincipal'
import Header from './src/components/Header'
import ButtonExp from './src/components/ButtonExp'
import Login from './src/screens/Login'
// import MinMax from './src/components/MinMax'

export default () => {
  return (
    <SafeAreaView>
      <Login/>
      {/* <Header/>
      <ButtonExp /> */}
      {/*<MinMax min="2" max="10"/> strings*/}
      {/*<MinMax min={5} max={15}/> valor numérico*/}
      {/* <MinMax min={300} max={450}/> */}
      {/* <TituloPrincipal title="Home" subtitle="seja bem vindo"/>
      <TituloPrincipal title="Produtos"/>
      <TituloPrincipal title="Carrinho"/>
      <Botao title="Add to cart" back="#066922"/>
      <Botao title="Comprar" back="#066922"/>
      <Botao title="Finalizar compra" back="#066922"/>
      <Botao title="Cadastrar" back="grey"/>
      <Botao title="Cadastrar" />
      <View style={style.App}>
        <Text style={[style.txtG, style.txtBranco]}>Iniciando com estilos</Text>
    </View> */}
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

 
