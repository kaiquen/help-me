import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import ModalCard from '../ModalCard';

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
        <TouchableOpacity onPress={handleCard} style={styles.container} activeOpacity={.9}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    photoBox: {
        width: 70,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    info: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '800',
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
    },
    description: {
         fontSize: 16,
         fontWeight: '400',
    },
    price: {
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 18,
        color: stylesGlobal.colors.primary.orange
    }
})