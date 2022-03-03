import React from 'react';
import { StyleSheet, View,  Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { stylesGlobal } from '../../global/styles';
export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.operation}>
                <Icon name='barcode' size={25} color={stylesGlobal.colors.primary.orange}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoTitle}>Pagamendo efetuado</Text>
                <Text style={styles.infoPlace}>Vision Serviço de Telecom.</Text>
                <Text style={styles.amount}>R$ 50,00</Text>
            </View>
            <Text style={styles.date}>15 FEV</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#99999944'
    },
    operation: {  
        alignItems: 'center',
        justifyContent: 'center',  
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 40,
        height: 40,
        elevation: 1,
    },
    info: {
        paddingHorizontal: 15,
    },
    infoTitle: {
        color: stylesGlobal.colors.primary.gray,
        fontSize: 16,
        fontWeight: '500',
    },
    infoPlace: {
        fontSize: 16,
        fontWeight: '400',
    },
    amount: {
        fontSize: 16,
        fontWeight: '400',
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})