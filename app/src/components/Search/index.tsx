import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { stylesGlobal } from '../../global/styles';


export default () => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color={stylesGlobal.colors.primary.gray}/>
            <TextInput style={styles.input} placeholder='Buscar'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 20,
        elevation: 1,
    },
    input: {
        width: '100%',
        height: '100%',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
        color: stylesGlobal.colors.primary.gray
    }
})