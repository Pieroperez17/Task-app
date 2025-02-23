import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen } from "../../components/Screen";
import { getGameDetails } from "../../lib/metacritic";
import { useEffect, useState } from "react";
import { MyTasks } from "../../components/Page/My_Task";


export default function TaskNew(){
    const [valor, setValor] = useState(null);



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


    const { value } = useLocalSearchParams();
        
        if(value === 'misTareas'){
            return (
            <Screen>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#A77CFC" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `Mis Tareas`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'black' },
                }}
                />
                <View>
                    {
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <MyTasks id={valor} />
                        )
                    }
                    
                </View>
            </Screen>
        )}
        if(value === 'datitos'){
            return (
            <Screen>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#A77CFC" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `Data`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'black' },
                }}
                />
                <View>
                    {
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                {value}
                            </Text>
                        )
                    }
                    
                </View>
            </Screen>
        )}
        if(value === 'datitos'){
            return (
            <Screen>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#A77CFC" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `Data`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'black' },
                }}
                />
                <View>
                    {
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                {value}
                            </Text>
                        )
                    }
                    
                </View>
            </Screen>
        )}if(value === 'datitos'){
            return (
            <Screen>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#A77CFC" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `Data`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'black' },
                }}
                />
                <View>
                    {
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                {value}
                            </Text>
                        )
                    }
                    
                </View>
            </Screen>
        )}else{
            return (
            <Screen>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: "#A77CFC" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `No se econtro la pagina :(`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'white' },
                }}
                />
                <View>
                    {
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <View className="justify-center items-center text-center w-full h-full" >
                                <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                    La pagina '{value}' no se encontró
                                </Text>
                            </View>
                        )
                    }
                    
                </View>
            </Screen>
        )}
        
    
}
