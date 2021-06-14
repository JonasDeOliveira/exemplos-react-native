import React from 'react'
import { Text, StyleSheet, View, SafeAreaView,
          TouchableOpacity } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './src/components/Multi'
import BtnComprar from './src/components/BtnComprar'
import TituloPrincipal from './src/components/TituloPrincipal'
import Header from './src/components/Header'

export default () => {
  return (
    <SafeAreaView>
      <Header/>
      <TituloPrincipal />
      <BtnComprar/>
      <View style={style.App}>
        <Text style={[style.txtG, style.txtBranco]}>Iniciando com estilos</Text>
    </View>
      <BtnComprar/>
      <BtnComprar/>
      <TituloPrincipal />
      <TituloPrincipal />
      <Header/>
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

 
