import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { stylesGlobal } from '../../global/styles';

interface IUser {   
    name: string;
    photo: string;
    location: string;
    services: {
        title: string;
        description: string;
    }
}

export default ({modalVisible, setModalVisible, name, photo, services, location}:IUser | any) => {
    return (
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
            <View style={styles.container}>
                <View style={styles.profile}>
                  <View style={styles.photoBox}>
                    <Image style={styles.photo} source={{uri: photo}}/>
                  </View>
                  <View style={styles.infoBox}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.location}>
                      <Icon name='enviromento' size={18} color={stylesGlobal.colors.primary.orange}/>
                      Cachoeiro de Itapemirim
                    </Text>
                    <View style={styles.ratiosBox}>
                      <Text style={styles.ratios}>
                        4.5
                      </Text>
                        <Icon name="star" size={15} color='#F6D651'/>
                      <Text>
                        (203)
                      </Text>
                  </View>
                  </View>
               
                </View>
                <View style={styles.service}>
                  <Text style={styles.title}>{services.title}</Text>
                  <Text style={styles.price}>R$ 125,00</Text>
                  <Text style={styles.description}>{services.description}</Text>
                </View>
              
                <TouchableOpacity style={styles.btnBox}>
                  <Text style={styles.btnText}>Entrar em contato</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.close}>
                  <Icon name="close" size={25} color={stylesGlobal.colors.primary.orange}/>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
      },
      profile: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    
      },
      photoBox: {
        width: 80,
        height: 80,
        borderRadius: 30,
        overflow: "hidden"
      },
      photo: {
        width: '100%',
        height: '100%',
      },
      infoBox: {
        marginLeft: 10,
      },
      name: {
        fontSize: 20,
        fontWeight: '800',
      },
      location: {
        fontSize:16,
        fontWeight: '400'
      },
      ratiosBox: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratios: {
        fontSize: 18,
        fontWeight: '700',
        marginRight: 5,
      },
      service: {
          alignItems: 'flex-start'
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
      }, 
      description: {
        fontSize: 18,
        fontWeight: '400',
      },
      btnBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: stylesGlobal.colors.primary.orange,
        elevation: 2,
      },
      btnText: {
        color:'#fff',
        fontSize: 20,
        fontWeight: '600',
      },
      close: {
        position: 'absolute',
        top: 20,
        right: 20,
      },
      price: {
        position: 'absolute',
        right: 0,
        fontSize: 20,
        color: stylesGlobal.colors.primary.orange
    }
})