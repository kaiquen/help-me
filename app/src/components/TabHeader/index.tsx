import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default ({route,drawer}: any) => {
    return (
        <LinearGradient 
            style={styles.container}
            colors={[ '#ffa365', stylesGlobal.colors.primary.orange]}
            start={{x:0,y:1}}
            end={{x:0,y:0}}
            >
            <StatusBar backgroundColor={stylesGlobal.colors.primary.orange}/>
            <Text style={styles.title}>{route.name}</Text>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                <Icon name="user" size={20} color='#fff'/>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    title: {
        fontSize: 25,
        color: '#fff'
    }
})