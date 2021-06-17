import React from 'react'
import { Button } from 'react-native'

export default () => {

    function logar() {
        console.warn("Logou!")
    }

    function cadastrar() {
        console.warn("cadastrou!")
    }

    return (
        <>
            <Button 
                title="Logar"
                onPress={logar}/>
            <Button 
                title="Cadatrar"
                onPress={cadastrar}/>
        </>
    )
}

