import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../TituloPrincipal'
import IptText from '../IptText'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal subtitle="Endereço"/>
            <IptText label="CEP"/>
            <IptText label="Rua"/>
            <IptText label="Número"/>
            <IptText label="Bairro"/>
            <IptText label="Cidade"/>
            <IptText label="Estado"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})