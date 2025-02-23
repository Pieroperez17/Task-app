import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView , TouchableOpacity} from "react-native";
import { Screen } from "../Screen";
import { supabase } from "../../lib/supabase";

export const Config_User_loguin = ({ id }) => {
    const [usersGlobal, setUsersGlobal] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
        const fechUsers = async () => {
            if (id !== null) {
                const { data, error } = await supabase.from('Users').select('*').eq('id', id);
                if (error) {
                    console.log('error', error);
                } else {
                    setUsersGlobal(data[0]);
                    setEditedUser(data[0]);
                }
            }
        };

        fechUsers();
    }, [id]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const { error } = await supabase
            .from('Users')
            .update(editedUser)
            .eq('id', id);

        if (error) {
            console.log('error', error);
        } else {
            setUsersGlobal(editedUser);
            setIsEditing(false);
        }
    };

    const maskText = (text) => {
        // Si el texto es undefined o null, usa una cadena vacía como valor por defecto
        const safeText = text || '';
        return safeText.replace(/./g, '*'); // Reemplaza cada carácter con un asterisco
    };


    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.title}>Ajustes de usuario</Text>
                <Image source={{ uri: usersGlobal.image }} style={styles.image} />
                <Text style={styles.text}>ID: {usersGlobal.id}</Text>
                {isEditing ? (
                    <>
                        <Text style={styles.mintitle}>✉️ Email</Text>
                        <TextInput
                            style={styles.input}
                            value={editedUser.email}
                            onChangeText={(text) => setEditedUser({ ...editedUser, email: text })}
                            placeholder="Email"
                        />
                        <Text style={styles.mintitle}>👤 Nombre</Text>
                        <TextInput
                            style={styles.input}
                            value={editedUser.name}
                            onChangeText={(text) => setEditedUser({ ...editedUser, name: text })}
                            placeholder="Nombre"
                        />
                        <Text style={styles.mintitle}>🔗 URL Image</Text>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            value={(editedUser.image)}
                            onChangeText={(text) => setEditedUser({ ...editedUser, image: text })}
                            placeholder="URL de la imagen"
                        />
                        <Text style={styles.mintitle}>🔑 Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            value={editedUser.password}
                            onChangeText={(text) => setEditedUser({ ...editedUser, password: text })}
                            placeholder="Contraseña"
                            
                        />
                        <TouchableOpacity style={styles.button}  onPress={handleSave}>
                            <Text style={styles.textoInter}>Guardar</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>  
                        <Text style={styles.mintitle}>✉️ Email</Text>
                        <Text  style={styles.datos}>{usersGlobal.email}</Text>
                        <Text style={styles.mintitle}>👤 Nombre</Text>
                        <Text style={styles.datos}>{usersGlobal.name}</Text>
                        <Text style={styles.mintitle}>🔗 URL Image</Text>
                        <Text style={styles.datos}>{usersGlobal.image}</Text>
                        <Text style={styles.mintitle}>🔑 Contraseña</Text>
                        <Text style={styles.datos}>{maskText(usersGlobal.password)}</Text>
                        <Text style={styles.text}>* La contraseña se muestra enmascarada por seguridad</Text>
                        <TouchableOpacity style={styles.button}  onPress={handleEdit}>
                            <Text style={styles.textoInter}>Editar</Text>
                        </TouchableOpacity>
                    </>
                )}
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#19191B',
        borderRadius: 15,
        width: '95%',
        height: 'justify-content',
        paddingVertical: 15,
        marginHorizontal: 'auto',
        marginTop: 2,
    },
    title: {
        width: '90%',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
        marginBottom: 10,
    },
    text: {
        color: 'gray',
        fontSize: 10,
        marginBottom: 4,
    },
    input: {
        width: '90%',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 'none',
        margin:'none',
        borderRadius: 15,
        marginVertical: 4,
        padding: 8,
    },
    datos: {
        width: '90%',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 8,
        marginVertical: 4,
        borderRadius: 15,
    },
    mintitle: {
        color: 'white',
        width: '90%',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    button: {
        backgroundColor: '#A77CFC',
        paddingHorizontal: 36,
        paddingVertical: 8,
        marginTop: 12,
        borderRadius: 5,
    },
    textoInter: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});