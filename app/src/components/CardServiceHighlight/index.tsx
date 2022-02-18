import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { stylesGlobal } from '../../global/styles';

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

    return (
        <View style={styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '98%',
        width: 150,
        alignItems: 'flex-start',
        borderRadius: 10,
        elevation: 1,
        padding: 10,
        marginRight: 10,
    },
    photoBox: {
        width: 70,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '800'
    },
    title: {
        fontSize: 17,
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        fontWeight: '400'
    },
    price: {
        fontSize: 18,
        color: stylesGlobal.colors.primary.orange
    }
})