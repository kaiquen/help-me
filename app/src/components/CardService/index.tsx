import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';
import ModalCard from '../ModalCard';

interface IUser {   
    user: {
        login: {
            uuid:string
        }
        name: {
            title: string;
            first: string;
            last:string;
        }
        picture: {
            large: string;
            medium: string;
            thumbnail: string;
        }
    }
}


export default ({user}:IUser) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCard = () => {
        setModalVisible(true);
    }

    return (
        <TouchableOpacity onPress={handleCard} style={styles.container} activeOpacity={.9}>
            <View style={styles.photoBox}>
                <Image style={styles.photo} source={{uri: user.picture.large}}/>
            </View>
    
            <View style={styles.info}>
                <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
              
                <ScrollView showsVerticalScrollIndicator={false}> 
                
                    <Text style={styles.title}>Preciso de um pintor</Text>
                
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum praesentium
                        veritatis inventore! Incidunt fuga quos quas corrupti suscipit placeat repellat!
                    </Text>
                </ScrollView>
            </View>
            <Text style={styles.price}>R$ 125,00</Text>
           <ModalCard modalVisible={modalVisible} setModalVisible={setModalVisible} user={user}/>
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