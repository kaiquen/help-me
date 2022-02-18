import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import Icon from 'react-native-vector-icons/Feather';

export default ({route,drawer}: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={stylesGlobal.colors.primary.orange}/>
            <Text style={styles.title}>{route.name}</Text>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                <Icon name="user" size={20} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: stylesGlobal.colors.primary.orange,
    },
    title: {
        fontSize: 25,
        color: '#fff'
    }
})