import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default props => {

    let postCadastroObj = {
        nome: '',
        email: '',
        senha: ''
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function postCadastro() {
        postCadastroObj.nome = nome
        postCadastroObj.email = email 
        postCadastroObj.senha = senha
        console.warn(postCadastroObj)
    }
    
    return (
        <View style={styles.container}>
            <Text>{nome}</Text>
            <Text>{email}</Text>
            <Text>{senha}</Text>
            <TextInput style={styles.input} 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={value => setNome(value)}/>
            <TextInput style={styles.input} 
                placeholder='Digite seu email'
                value={email}
                onChangeText={value => setEmail(value)}/>
            <TextInput style={styles.input} 
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={value => setSenha(value)}
                secureTextEntry={true}/>
                <Button title="Cadastrar" 
                    onPress={() => postCadastro()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        backgroundColor: '#aaa',
        padding: 10,
        margin: 10
    }
})