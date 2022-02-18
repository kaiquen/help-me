import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import CardService from '../../components/CardService';
import CardServiceHighlight from '../../components/CardServiceHighlight';
import ModalCard from '../../components/ModalCard';
import Search from '../../components/Search';
import { stylesGlobal } from '../../global/styles';
import { api } from '../../services/axios';

interface IUser {   
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

export default () => {
    const [user, setUser] = useState<IUser[]>([]);
    const [refreshing,  setRefreshing] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    
    const changeUser = async () => {
        try {
            const {data} = await api.get('/?results=10');
            setUser(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    
    const onRefresh = () => {
        changeUser();
    }

    useEffect(() => {
        changeUser();
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
                    renderItem={(user) => <CardServiceHighlight user={user.item}/>}
                    keyExtractor={user => user.login.uuid}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.cardServicesBox}>
                <Text style={styles.titleCategory}>Serviços</Text>
                <FlatList 
                    data={user}
                    renderItem={user => <CardService user={user.item}/>}
                    keyExtractor={user => user.login.uuid}
                    showsVerticalScrollIndicator={false}
                    extraData={selectedUser}
                    refreshControl= {
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
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
        backgroundColor: stylesGlobal.colors.primary.orange
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