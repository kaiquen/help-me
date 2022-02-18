import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet,  View } from 'react-native';
import { stylesGlobal } from '../../global/styles';

export default () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        const changeSignIn = () => {
            setTimeout(() => {
                navigation.navigate('Option');
            },2000)
        }

        changeSignIn();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/logo5.png")}/>
            <ActivityIndicator color={stylesGlobal.colors.primary.orange} size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})