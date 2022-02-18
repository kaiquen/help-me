import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';

export default () => {
    const navigation = useNavigation<any>();


    const handleSignIn = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../../assets/images/logo5.png')}/>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnSignUp]}>
                    <Text style={[styles.btnText, styles.btnTextSignUp]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
    },
    logoBox: {
        width: '80%',
        height: '80%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    btnBox: {
        flex: .3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    btn: {
        backgroundColor: stylesGlobal.colors.primary.orange,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderRadius: 10,
        elevation: 2,
    },
    btnSignUp: {
        backgroundColor: '#fff',
    },
    btnText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    btnTextSignUp: {
        color: stylesGlobal.colors.primary.orange,
    }
})