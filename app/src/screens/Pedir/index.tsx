import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default () => {
    const [price,setPrice] = useState('R$ ');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Peça ajuda e encontraremos profissionais para atendelo.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.formTitle}>Dê um nome para o pedido:</Text>
                    <TextInput style={styles.formInput} 
                        placeholder="Ex: Preciso de um pintor"/>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formTitle}>Drescreva o trabalho a ser realizado:</Text>
                    <TextInput style={styles.formInputEditable} 
                        editable 
                        maxLength={200} 
                        multiline
                        numberOfLines={4}
                        />
                </View>
                <View style={[styles.formGroup, {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        }]}>
                    <Text style={styles.formTitle}>
                        Selecione um tipo de profissional
                    </Text>
                    <Icon name="plus" size={20} color="#000"/>
                </View>
                <View style={{
                    alignItems: 'flex-start',
                    marginTop: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    borderWidth: .5,
                    borderColor:"#99999950",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                        <Text style={{fontSize: 18}}>Pintor</Text>
                        <Icon name="trash-can" size={20} color="#EF5350"/>
                </View>
                <View style={styles.formGroup}>
                    <TextInput style={styles.formInputEditable}
                        editable 
                        maxLength={200} 
                        multiline
                        numberOfLines={4}
                        placeholder="Alguma observação?"/>
                </View>
                <View style={styles.formGroupPrice}>
                    <Text style={styles.formTitle}>Valor:</Text>
                    <TextInput style={styles.formInputPrice} 
                    keyboardType="numeric" 
                    onChangeText={setPrice}
                    value={price}
                    />

                </View>
            </View>
            <TouchableOpacity style={styles.publish}>
                <Text style={styles.publishText}>Publicar pedido</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    header: {
        borderBottomWidth: 1,
        borderColor: stylesGlobal.colors.primary.orange,
        paddingVertical: 10,
        width: '100%',
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        color: stylesGlobal.colors.primary.orange
    },
    form: {
        width: '100%',
        padding: 20
    },
    formGroup: {
        alignItems: 'flex-start',
        marginTop: 20,
    },
    formGroupPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:10,
      
    },
    formTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    formInput: {
        height: 30,
        width: '100%',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: stylesGlobal.colors.primary.orange,
        borderBottomWidth: 1
    },
    formInputEditable: {
        width: '100%',
        borderRadius: 5,
        borderColor: stylesGlobal.colors.primary.orange,
        borderWidth: .5,
        paddingVertical: 0,
        paddingHorizontal: 10,
    },
    formInputPrice: {
        width: '100%',
        height: '100%',
        fontSize: 30,
        paddingLeft: 30,
        color: stylesGlobal.colors.primary.orange
    },
    publish: {
        backgroundColor: stylesGlobal.colors.primary.orange,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    publishText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    }
})