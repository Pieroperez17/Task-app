import { TouchableOpacity, ScrollView, Text, TextInput, View, Image, Animated, StyleSheet } from "react-native";
import { Link } from 'expo-router';   
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Config_User_loguin} from '../../components/Page/Config_User_loguin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [valor, setValor] = useState(null)
    const [id_register, setId_register] = useState('')

    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const slideAnim = new Animated.Value(-100);

    useEffect(() => {
        const fechUsers = async () => {
            const{data,error}= await supabase.from('Users').select('*')
            if (error) console.log('error',error)
            else setUsers(data)
        }
        fechUsers()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            loadData();
        }, 100); // 0.1 segundos = 100 milisegundos
    
        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);     



    const handleLogin = () => {
        if (email === '' || password === '') {
            alert('Por favor, completa todos los campos');
        }
        users.map((user) => {
            if (user.email == email && user.password == password) {
                setId_register(user.id);
                saveData();
            }
        });
    };
    
    const saveData = async () => {
        try {
            await AsyncStorage.setItem('Registro', `${id_register}`);
            console.log('Datos guardados');
        } catch (error) {
            console.error('Error al guardar los datos', error);
        }
        loadData();
    };

    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('Registro');
            if (value !== null) {
                setValor(value)
            }else{
                setValor(null)
            }
        } catch (error) {
            console.error('Error al recuperar los datos', error);
        }
    };

    const handleRegister = async () => {
        if (email === '' || password === '') {
            alert('No se puede relizar un registro vacio');
        }else{
            const {data, error} = await supabase.from('Users').insert(
                {email: email, password: password}
            ).single()
            if (error) {
                console.log('error', error)
            }else{
                console.log('Registro exitoso')
                alert('Registro exitoso')
            }
        }
    };

    return (
        <Screen>
            {valor != null ? (
                <Config_User_loguin id={valor}/>
            ):(
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

                        <TouchableOpacity
                            className="w-full p-3 bg-purple-600 rounded-xl mb-4"
                            onPress={handleLogin}
                        >
                            <Text className="text-center text-white text-base font-medium">Ingresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="w-full p-3 bg-purple-600 rounded-xl"
                            onPress={handleRegister}
                            
                        >
                            <Text className="text-center text-white text-base font-medium">Registrarme</Text>
                        </TouchableOpacity>
                        <Text className="text-white text-white/90 mt-4">{valor}</Text>
                    </View>
                </ScrollView>
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    notificationContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    notificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    notificationSubText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
});