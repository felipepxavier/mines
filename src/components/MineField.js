import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r)=>{ /* Pega a LINHA INTEIRA com todos objetos */
        const columns = row.map((field, c)=> { /* pega cada objeto e insere o componente Field */
            return <Field {...field} key={c} />
        })
        return <View key={r}
            style={{flexDirection: 'row'}}>{columns}</View> /* LINHA INTEIRA COM TODOS OS COMPONENTES */
    })
    return <View style={styles.container}>{rows}</View> /* TODAS AS LINHAS */
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    }
})