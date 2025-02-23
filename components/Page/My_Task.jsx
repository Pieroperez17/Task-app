import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import { supabase } from '../../lib/supabase';
import { TareasDelDia } from '../TaskOfDay';
import Loading_Comp from '../extraComp/Loading_Comp';

export const MyTasks = ({ id }) => {
    const [tareas, setTareas] = useState([]);   
    const [loading, setLoading] = useState(true);


    const fechTareas = async () => {
        const{data,error}= await supabase
            .from('Tasks')
            .select('*')
            .contains('miembros',[id])
            .order('N_pendiente', { ascending: true })
        if (error) console.log('error',error)
        else setTareas(data)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            fechTareas();
            
        }, 100); // 0.1 segundos = 100 milisegundos
        
        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [id]);  

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 2 segundos

        // Limpieza del temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []);

    return (
        <View >
            <Text className="text-gray-100" >{id}</Text>
            {
                loading ? (
                    <View className="flex justify-center items-center pt-10">
                        <Loading_Comp />
                    </View>
                ) : (
                    <FlatList
                        data={tareas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TareasDelDia task={item}/>
                        )}
                        ListHeaderComponent={
                            <Text className="text-gray-100 text-2xl font-bold text-center">Mis Tareas</Text>    
                        }
                    />
                )
            }
        </View>
    );
}