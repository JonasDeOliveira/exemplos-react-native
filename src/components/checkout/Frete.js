import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TituloPrincipal from '../TituloPrincipal'
export default props => {
    return (
        <View style={styles.container}>
            <TituloPrincipal subtitle="Frete"/>
            <TituloPrincipal title="Frete Fixo R$20,00"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})