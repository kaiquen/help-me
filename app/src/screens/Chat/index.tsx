import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default () => {
    return (
        <View style={styles.container}>
            <LottieView style={styles.animation}source={require('../../assets/cat.json')}
                autoPlay loop
            />

            <Text style={styles.message}>Nenhuma mensagem ainda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    animation: {
      
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '70%',
    },
    message: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})