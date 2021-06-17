import React, { useState } from 'react'
import { Text, Button, StyleSheet } from 'react-native'

export default props => {

    const [numero, setNumero] = useState(props.inicial)
    const [qtd, setQtd] = useState(0)
    const estoque = 10

    function aumentarNumero() {  
        if (numero < estoque) {
            setNumero(numero + 1)
        }
    }

    function diminuirNumero() {
        if (numero > 0) {
            setNumero(numero - 1)
        }
    }

    function aumentarQtd() {
        if (qtd < estoque) {
            setQtd(qtd + 1)
        }
    }

    function diminuirQtd() {
        if (qtd > 0) {
            setQtd(qtd - 1)
        }
    }

    return (
        <>
            <Text style={styles.texto}>Numero vindo de uma Props</Text>
            <Text style={styles.texto}>{numero}</Text>
            <Button title="+" onPress={aumentarNumero}/>
            <Button title="-" onPress={diminuirNumero}/>

            <Text style={styles.texto}>Variável criada dentro do componente</Text>
            <Text style={styles.texto}>{qtd}</Text>
            <Button title="+" onPress={aumentarQtd}/>
            <Button title="-" onPress={diminuirQtd}/>
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30
    }
})