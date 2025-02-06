import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { OpcionesInicio } from '../../components/OpcionesContainer';
import { Screen } from '../../components/Screen';
import { supabase } from '../../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NewComponent } from '../../components/NewsComponent';
import { DontFount } from '../../components/extraComp/DntF';



export default function CalendarioView() {
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
        fechTareas()
        fechNews()
        fechUsers()
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
                <DontFount Page={'Calendario'} />
            ):(
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() => (
                        <View>
                        <Text className="text-white text-2xl font-bold mt-1 mb-3 ml-4">Hola {usuario.name} 👋</Text>
                            <OpcionesInicio />
                            <Text className="text-white text-2xl font-bold mt-4 mb-3 ml-4">Tareas {valor} 📝</Text>
                            {
                                tareas.length === 0 ? (
                                    <View className="justify-center mx-auto items-center text-center w-11/12  py-3 rounded-lg" style={{backgroundColor: "#19191B"}} >
                                        <Text className="text-white text-xl font-bold mt-1 mb-1 ">✅ No hay tareas pendientes</Text>
                                    </View>
                                ) : (
                                    <FlatList
                                        data={tareas}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={({ item }) => (
                                            <View className="justify-center mx-auto items-center text-center w-11/12 mt-4 pb-2 rounded-lg" style={{backgroundColor: "#19191B"}}>
                                                <Text className="text-white text-xl font-bold mx-4 ">{item.task}</Text>
                                                <Text className="text-slate-500 text-sm font-bold mx-4 ">{item.time}</Text>
                                                <Text className="text-white mt-4 text-sm  font-bold mx-4 ">{item.content}</Text>
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