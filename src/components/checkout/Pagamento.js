import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../TituloPrincipal'
import IptText from '../IptText'

export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal subtitle="Pagamento"/>
            <IptText label="Nome Titular"/>
            <IptText label="Número do Cartão"/>
            <IptText label="Data Expiracao"/>
            <IptText label="Cod. Segurança"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})