import React from 'react'
import { Button } from 'react-native'

export default props => {

    return (
        <>
            <Button 
                title={props.titulo}
                onPress={props.funcao}/>
        </>
    )
}