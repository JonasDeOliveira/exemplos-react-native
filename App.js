import React from 'react'
import { Text, StyleSheet, View, SafeAreaView,
          TouchableOpacity } from 'react-native'
import Header from './src/components/Header'
// import RevisaoProps from './src/components/revisaoProps/RevisaoProps'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './src/components/Multi'
// import Botao from './src/components/Botao'
// import TituloPrincipal from './src/components/TituloPrincipal'
// import ButtonExp from './src/components/ButtonExp'
// import Login from './src/screens/Login'
// import MinMax from './src/components/MinMax'
// import Contator from './src/components/Contator'
// import Pai from './src/components/direta/Pai'
// import GridProdutos from './src/components/GridProdutos'
import Pai from './src/components/indireta/Pai'
// import Diferenciar from './src/components/Diferenciar'
// import Familia from './src/components/propsChildren/Familia'
// import Membro from './src/components/propsChildren/Membro'
// import ParImpar from './src/components/condicional/ParImpar'
import UsuarioLogado from './src/components/condicional/UsuarioLogado'
import ListaProdutos from './src/components/Produtos/ListaProdutos'
import ListaProdutos2 from './src/components/Produtos/ListaProdutos2'
import DigiteSeuNome from './src/components/DigiteSeuNome'
export default () => {
  return (
    <SafeAreaView>
      <Header/>
      <DigiteSeuNome/>
      {/* <ListaProdutos/> */}
      {/* <ListaProdutos2/> */}
      {/* <UsuarioLogado usuario={{nome:'Jonas', email:"Jonas@rd.com"}}/>
      <UsuarioLogado usuario={null}/>
      <UsuarioLogado usuario={{nome:'Carlos'}}/> */}

      {/* <ParImpar num={2}/>
      <ParImpar num={3}/>
      <ParImpar num={10}/> */}
      {/* <Familia>
        <Membro nome="Jonas" sobrenome="Carvalho"/>
        <Membro nome="Ronaldo" sobrenome="Carvalho"/>
        <Membro nome="Diego" sobrenome="Carvalho"/>
      </Familia>
      <Familia>
        <Membro nome="ANa" sobrenome="SIlva"/>
        <Membro nome="FElipe" sobrenome="SIlva"/>
        <Membro nome="Marcos" sobrenome="SIlva"/>
      </Familia> */}
      {/* <Diferenciar/> */}
      {/* <Pai/> */}
      {/* <RevisaoProps/> */}
      {/* <GridProdutos/> */}
      {/* <Pai/> */}
      {/* <Contator inicial={0}/> */}
      {/* <Login/> */}
      {/*<ButtonExp /> */}
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

 
