import React, { Component } from 'react'
import { Text, Button, StyleSheet } from 'react-native'

export default class Primeiro extends Component {

    param = 'param da classe'

    state = {
        texto: this.props.texto,
        numero: 10
    }

    mudarEstado() {
        this.setState({texto: 'novo valor'})
    }

    teste(param) {
        return (
            <>
                <Text style={styles.txt}>{param}</Text>
                <Text>{this.param}</Text>
                <Text>{this.state.texto}</Text>
                <Text>{this.state.numero}</Text>
            </>
        )
    }

    render() {
        return (
            <>
                <Button onPress={() => this.mudarEstado()} title="mudar estado"/>
                {this.teste('param da funcao')}
            </>
        )   
    }
    
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 25
    }
})

