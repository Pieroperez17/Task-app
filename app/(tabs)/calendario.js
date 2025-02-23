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
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Pagina en construcion ...</Text>
                    <Text style={{color: 'white'}}>{valor}</Text>
                </View>
            )}
        </Screen>
    );
}