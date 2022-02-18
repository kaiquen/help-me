import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { stylesGlobal } from '../../global/styles';

export default ({state, navigation}:any) => {
    const active = {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: stylesGlobal.colors.primary.orange,
        borderRadius: 100,
    }
    
    const goTo = (screenName:string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => goTo('Home')} style={styles.iconBox}>
                    <View style={[styles.icon, state.index === 0?active:undefined]}>
                        <Icon style={{color: state.index === 0?'#fff':'#000'}} name="home" size={20}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goTo('Carteira')} style={styles.iconBox}>
                    <View style={[styles.icon, state.index === 1?active:undefined]}>
                        <Icon style={{color: state.index === 1?'#fff':'#000'}} name="credit-card" size={20}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goTo('Pedir')} style={styles.iconBox}>
                    <View style={[styles.icon, state.index === 2?active:undefined]}>
                        <Icon style={{color: state.index === 2?'#fff':'#000'}} name="plus" size={20}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goTo('Agenda')} style={styles.iconBox}>
                    <View style={[styles.icon, state.index === 3?active:undefined]}>
                        <Icon style={{color: state.index === 3?'#fff':'#000'}} name="calendar" size={20}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goTo('Chat')} style={styles.iconBox}>
                    <View style={[styles.icon, state.index === 4?active:undefined]}>
                        <Icon style={{color: state.index === 4?'#fff':'#000'}} name="message-square" size={20}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
    },
    tabBar: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        backfaceVisibility: 'visible',
        elevation: 10,
    },
    iconBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    icon: {

    }
})