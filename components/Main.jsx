import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { FlatList, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { OpcionesInicio } from './OpcionesContainer';
import { Screen } from './Screen';
import { supabase } from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user_register } from '../app/(tabs)/login';
import { NewComponent } from './NewsComponent';

export function Main() {
    const [users, setUsers] = useState([]);     
    const [valor, setValor] = useState(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fechUsers = async () => {
            const{data,error}= await supabase.from('Users').select('*')
            if (error) console.log('error',error)
            else setUsers(data)
        }
        fechUsers()
        const fechNews = async () => {
            const{data,error}= await supabase.from('News').select('*')
            if (error) console.log('error',error)
            else setNews(data)
        }
        fechNews()
    }, []);

    

    
    return (
        <Screen>
            
            {users.length === 0 ? (
                    <Text style={{color: 'white'}}>No encontrado</Text>
            ):(
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() => (
                        <View>
                            <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4">Hola Sebastian 👋</Text>
                            <OpcionesInicio />
                            <Text className="text-white text-2xl font-bold mt-4 mb-3 ml-4">{user_register}</Text>
                            <Text className="text-white text-2xl font-bold mt-4 mb-3 ml-4">Noticias Del Dia 📰</Text>
                        </View>
                    )}
                    renderItem={({ item , index}) => <NewComponent noticia={item} index={index} />}
                />
            )}
        </Screen>
    );
}


