import { Pressable, ScrollView, Text, TextInput, View, Image } from "react-native";
import { Link } from 'expo-router';   
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export var user_register = 'dwa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    


    useEffect(() => {
        const fechUsers = async () => {
            const{data,error}= await supabase.from('Users').select('*')
            if (error) console.log('error',error)
            else setUsers(data)
        }
        fechUsers()
    }, []);
    


    const handleLogin = () => {
        users.map((user) => {
            if (user.email == email && user.password == password) {
                saveData();
                user_register = user.email;
            }
        });
        if (email === '' || password === '') {
            alert('Por favor, completa todos los campos');
        }
    };
    
    const saveData = async () => {
        try {
            await AsyncStorage.setItem('Registro', 'Pass');
            console.log('Datos guardados');
        } catch (error) {
            console.error('Error al guardar los datos', error);
        }
        loadData();
    };


    const [valor, setValor] = useState('')
    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('Registro');
            if (value !== null) {
                console.log('Datos recuperados:', value);
                setValor(value)
            }
        } catch (error) {
            console.error('Error al recuperar los datos', error);
        }
    };

    

    const handleRegister = () => {};





    return (
        <Screen>
            <ScrollView>
                <View className="flex-1 justify-center items-center p-4">
                    <Image
                        source={require('../../assets/icon.png')}
                        className="w-32 h-32 mt-4"
                    />
                    <Text className="text-4xl font-bold mb-16 mt-4 text-white">Regístrate</Text>
                    <TextInput
                        className="w-full p-3 mb-4 border border-gray-300 rounded-xl text-white"
                        placeholder="Email"
                        placeholderTextColor={"#fff"}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        inlineImageLeft="search_icon"
                        cursorColor={"#fff"}
                        
                    />
                    <TextInput
                        className="w-full p-3 mb-4 border border-gray-300 rounded-xl text-white"
                        placeholderTextColor={"#fff"}
                        placeholder="Password"
                        value={password}
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Pressable
                        className="w-full p-3 bg-purple-600 rounded-xl mb-4"
                        onPress={handleLogin}
                    >
                        <Text className="text-center text-white text-base font-medium">Ingresar</Text>
                    </Pressable>

                    <Pressable
                        className="w-full p-3 bg-purple-600 rounded-xl"
                        onPress={handleRegister}
                    >
                        <Text className="text-center text-white text-base font-medium">Registrarme</Text>
                    </Pressable>
                    <Text className="text-white text-white/90 mt-4">{valor}</Text>
                </View>
            </ScrollView>
        </Screen>
    );
}