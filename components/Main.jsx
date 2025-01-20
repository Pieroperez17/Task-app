import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { FlatList, Text, View, ActivityIndicator, Pressable, ScrollView } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { OpcionesInicio } from './OpcionesContainer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { CircleInfoIcon } from './Icons';
import { Logo } from './Logo';
import { Screen } from './Screen';
import { supabase } from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function Main() {
    const [users, setUsers] = useState([]);     
    const [valor, setValor] = useState(null);

    useEffect(() => {
        const fechUsers = async () => {
            const{data,error}= await supabase.from('Users').select('*')
            if (error) console.log('error',error)
            else setUsers(data)
        }
        fechUsers()
        
    }, []);

    
    
    
    
    return (
        <Screen>
            
            {users.length === 0 ? (
                    <Text style={{color: 'white'}}>No encontrado</Text>
            ):(
                <ScrollView>
                    <View>
                        <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4 ">Hola Sebastian 👋</Text>
                        <OpcionesInicio/>
                        <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4 ">Noticias</Text>
                        <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4 ">{valor}</Text>
                    </View>
                </ScrollView>
            )}
        </Screen>
    );
}


