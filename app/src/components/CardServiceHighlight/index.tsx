import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import ModalCard from '../ModalCard';
import LinearGradient from 'react-native-linear-gradient';

interface IUser {   
    name: string;
    photo: string;
    location: string;
    services: {
        title: string;
        description: string;
    } 
}

export default ({name, photo, services, location}:IUser) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCard = () => {
        setModalVisible(true);
    }
    
    return ( 
        <LinearGradient style={styles.container} 
            colors={[stylesGlobal.colors.primary.orange,'#ffa365']} 
            start={{x:0,y:1}}
            end={{x:0,y:0}}
        >
            <TouchableOpacity onPress={handleCard} activeOpacity={.9} >
                <View style={styles.photoBox}>
                    <Image style={styles.photo} source={{uri: photo}}/>
                </View>
                <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>

                    <ScrollView showsVerticalScrollIndicator={false}> 
                        <Text style={styles.title}>{services.title}</Text>
                        <Text style={styles.description}>{services.description}</Text>
                    </ScrollView>
                </View>
                <Text style={styles.price}>R$ 125,00</Text>
                <ModalCard modalVisible={modalVisible} setModalVisible={setModalVisible} name={name} photo={photo} services={services} location={location}/>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '98%',
        width: 150,
        alignItems: 'flex-start',
        borderRadius: 10,
        elevation: 2,
        padding: 10,
        marginRight: 10,
    },
    photoBox: {
        width: 70,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 1
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'

    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '800'
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        fontWeight: '300'
    },
    price: {
        fontSize: 18,
        fontWeight: '300',
        color: "#fff"
    }
})