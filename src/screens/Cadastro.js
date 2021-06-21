import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../components/TituloPrincipal'
import IptText from '../components/IptText'
import Botao from '../components/Botao'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal title="Faça seu Cadastro"/>
            <IptText label="Nome"/>
            <IptText label="Email"/>
            <IptText label="Rua"/>
            <IptText label="Telefone"/>
            <IptText label="Senha"/>
            <IptText label="Confirme sua senha"/>
            <Botao title="Cadastrar"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})