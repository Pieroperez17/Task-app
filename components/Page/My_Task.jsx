import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import { supabase } from '../../lib/supabase';
import { TareasDelDia } from '../TaskOfDay';
import Loading_Comp from '../extraComp/Loading_Comp';
import {Link} from 'expo-router';

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
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 2 segundos
        // Limpieza del temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []);

    
    fechTareas(); 

    const onPress = () => console.log('Pressed!');
    const ButtonFuncion = ({funcionAnidada,dscrp,ruta}) => {
        return (
            <Link href={`/options/${ruta}`} asChild >
                <TouchableOpacity 
                    onPress={funcionAnidada}
                    className="p-2 rounded-md w-11/12 mx-auto mt-4" 
                    style={{backgroundColor: '#A77CFC'}}               
                    >
                    <Text className="text-black text-lg font-bold text-center">{dscrp}</Text>
                </TouchableOpacity >
            </Link>
        );
    };





    return (
        <View >
            {
                loading ? (
                    <View className="flex justify-center items-center pt-10">
                        <Loading_Comp />
                    </View>
                ) : (
                        <FlatList
                            ListHeaderComponent={() => (
                                <View  className='pb-4'>
                                <Text className="text-start text-2xl font-bold mt-4 text-white w-11/12 mx-auto">Opciones:</Text>
                                <ButtonFuncion funcionAnidada={onPress} dscrp={'✔︎ Agregar Tarea'} ruta={'addTask'} />
                                <ButtonFuncion funcionAnidada={onPress} dscrp={'✖︎ Eliminar Tarea'} ruta={'deleteTask'} />
                                <Text className="text-start text-2xl font-bold mt-4 text-white w-11/12 mx-auto">Todas Las Tareas:</Text>
                                </View>
                            )}
                            data={tareas}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TareasDelDia task={item}/>
                            )}
                        />

                )
            }
        </View>
    );
}