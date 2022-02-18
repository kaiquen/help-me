import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, TextInput, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';

interface IProps {
    placeholder: string;
    iconName: string;
    password?: boolean;
}

export default ({placeholder, iconName, password}:IProps) => {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={20} color={stylesGlobal.colors.primary.orange}/>
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={password}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: stylesGlobal.colors.primary.orange
    },
    input: {
        width: '100%',
        height: '100%',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        color: stylesGlobal.colors.primary.orange
    }
})