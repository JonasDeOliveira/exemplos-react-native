import React from 'react'
import { Button, TextInput } from 'react-native'
import ButtonProps from '../components/ButtonProps'

export default props => {

    function logar() {
        console.warn("Logou!")
    }

    function cadastrar() {
        console.warn("cadastrou!")
    }

    return (
        <>
            <TextInput placeholder="digite seu e-mail"/>
            <TextInput placeholder="digite sua senha"/>
            <ButtonProps titulo="Logar" funcao={logar}/>
            <ButtonProps titulo="cadastrar" funcao={cadastrar}/>
        </>
    )
}