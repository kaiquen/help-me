import React, { useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import CardService from '../../components/CardService';
import CardServiceHighlight from '../../components/CardServiceHighlight';
import ModalCard from '../../components/ModalCard';
import Search from '../../components/Search';
import { UserContext } from '../../context/userContext';
import { stylesGlobal } from '../../global/styles';

interface IUser {   
    id: string;
    name: string;
    photo: string;
    location: string;
    services: {
        title: string;
        description: string;
    }
}

export default () => {
    const user = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState(null);
  
    useEffect(() => {
        
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Search />
            </View>
            <View style={styles.cardServicesHighlight}>
                <Text style={styles.titleCategory}>Destaque</Text>
                <FlatList 
                    data={user}
                    renderItem={(user) => <CardServiceHighlight name={user.item.name} photo={user.item.photo} services={user.item.services} location={user.item.location}/>}
                    keyExtractor={user => user.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    extraData={selectedUser}
                />
            </View>

            <View style={styles.cardServicesBox}>
                <Text style={styles.titleCategory}>Serviços</Text>
                <FlatList 
                    data={user}
                    renderItem={user => <CardService name={user.item.name} photo={user.item.photo} services={user.item.services} location={user.item.location}/>}
                    keyExtractor={user => user.id}
                    showsVerticalScrollIndicator={false}
                    extraData={selectedUser}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: "#fff",
    },
    searchBox: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#ffa365"
    },
    cardServicesHighlight: {
        flex: .7,
        width: '100%',
        padding: 10,
    },
    cardServicesBox: {
       flex: 1, 
        width: '100%',
        padding: 10,
    },
    titleCategory: {
        fontSize: 20,
        fontWeight: '500',
        color: stylesGlobal.colors.primary.gray,
        marginBottom: 10,
    }
})