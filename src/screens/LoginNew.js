import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../components/TituloPrincipal'
import IptText from '../components/IptText'
import Botao from '../components/Botao'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal title="Faça seu Login"/>
            <IptText label="Email"/>
            <IptText label="Senha"/>
            <Botao title="Entrar"/>
            <TituloPrincipal subtitle="Não possui cadastro"/>
            <Botao title="Cadastre-se"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})