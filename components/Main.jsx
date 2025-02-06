import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { FlatList, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { OpcionesInicio } from './OpcionesContainer';
import { Screen } from './Screen';
import { supabase } from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NewComponent } from './NewsComponent';
import { DontFount } from './extraComp/DntF';
import { TareasDelDia } from './TaskOfDay';


export function Main() {
    const [tareas, setTareas] = useState([]);     
    const [valor, setValor] = useState(null);
    const [news, setNews] = useState([]);
    const [usuario, setUsuario] = useState('');
    //const [nombre, setNombre] = useState('');

    useEffect(() => {
        const fechTareas = async () => {
            const{data,error}= await supabase.from('Tasks').select('*').contains('miembros',[valor]);
            if (error) console.log('error',error)
            else setTareas(data)
        }
        const fechUsers = async () => {
            if (valor !== null) {
                const { data, error } = await supabase.from('Users').select('*');
                if (error) {
                    console.log('error', error);
                } else {
                    setUsuario(data.find((element) => element.id === valor));
                    //console.log(data)
                    //setNombre(data[0].name)
                }
            }
        }
        const fechNews = async () => {
            const{data,error}= await supabase.from('News').select('*')
            if (error) console.log('error',error)
                else setNews(data)
        }
        fechUsers()
        fechTareas()
        fechNews()
    }, [valor]);

    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('Registro');
            if (value !== null) {
                setValor(value)
            }else{
                setValor(null)
            }
            
        }catch (error) {
            console.error('Error al recuperar los datos', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            loadData();
        }, 100); // 0.1 segundos = 100 milisegundos
    
        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);     


    return (
        <Screen>
            {valor === null ? (
                <DontFount Page={'Home'} />
            ):(
                <FlatList
                    refreshing={true}
                    
                    data={news}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() => (
                        <View>
                        <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4">Hola {usuario.name} 👋</Text>
                            <OpcionesInicio />
                            <Text className="text-white text-2xl font-bold mt-4 mb-3 ml-4">Pendientes 📝</Text>
                            {
                                tareas.length === 0 ? (
                                    <View className="justify-center mx-auto items-center text-center w-11/12  py-3 rounded-lg" style={{backgroundColor: "#19191B"}} >
                                        <Text className="text-white text-xl font-bold mt-1 mb-1 ">✅ No hay tareas pendientes</Text>
                                    </View>
                                ) : (
                                    <FlatList
                                        data={tareas}
                                        keyExtractor={(item) => item.id.toString()}
                                        refreshing={true}
                                        renderItem={({ item }) => (
                                            <TareasDelDia task={item}/>
                                        )}
                                        ListFooterComponent={() => (
                                            <View className="justify-center flex-row mx-auto items-center text-center w-11/12  pb-2 rounded-lg" >
                                                <Text className="text-gray-400 text-sm font-normal mb-1 ">Para mirar mas revisa </Text><Text className="text-gray-200 text-sm font-bold mb-1 ">Mis Tareas</Text>
                                            </View>
                                        )}
                                    />
                                )
                            }
                            <Text className="text-white text-2xl font-bold mt-4 mb-3 ml-4">Noticias Del Dia 📰</Text>
                        </View>
                    )}
                    renderItem={({ item , index}) => <NewComponent noticia={item} index={index} />}
                />
            )}
        </Screen>
    );
}


