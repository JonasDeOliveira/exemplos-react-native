import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Filho from './Filho'

export default props => {

    const [texto, setTexto] = useState('') //definindo o estado inicial de texto
    const [num, setNum] = useState(0) //definindo o estado inicial de num

    function exibirValor(numeroParam, textoParam) {
        setNum(numeroParam)
        setTexto(textoParam)
    }

    return (
        <View style={styles.container}>
            <Text>
                {texto}{num}
            </Text>
            <Filho funcao={exibirValor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})