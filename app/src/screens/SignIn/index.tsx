import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInput from '../../components/TextInput';
import { stylesGlobal } from '../../global/styles';

export default () => {
    const navigation = useNavigation<any>();


    const handleSignIn = () => {
        navigation.navigate('MainTab');
    }
    const handleSignUp= () => {
        navigation.navigate('SignUp');
    }


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput iconName="mail" placeholder="Email"/>
                <TextInput iconName="lock" placeholder="Senha" password={true}/>
            </View>
            <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
           
            <View style={styles.socialBox}>
                <TouchableOpacity style={styles.social}>
                    <Image style={styles.icon} source={require('../../assets/images/facebook.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social}>
                    <Image style={styles.icon} source={require('../../assets/images/google.png')}/>
                </TouchableOpacity>
            </View>

           
            <Text style={styles.footerText}>Ainda não tem uma conta? 
                    <Text onPress={handleSignUp} style={[styles.footerText, styles.footerTextSignUp]}> Cadastra-se</Text>
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
    },
    form: {
        flex: .3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
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
    btnText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    socialBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    social: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width:60,
        height:60,
        borderRadius: 40,
        elevation: 1,
    }, 
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 18,
    },
    footerLink: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerTextSignUp: {
        color: stylesGlobal.colors.primary.orange,
    }
})