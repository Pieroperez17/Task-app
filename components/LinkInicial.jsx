import { useEffect, useRef } from 'react';
import { Text, View, Image, StyleSheet,Animated, Constains ,TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function LinkComponent({ href, text ,children}) {
    
    return (
        <Link  href={`${href}`} asChild >
            <TouchableOpacity className="items-center justify-center" > 
                <View style={styles.button} className=''>
                    {children}
                    <Text style={styles.text} >{text}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

export function ExitComponent({text ,children}) {

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('Registro');
            console.log('Secion terminada');
        } catch (error) {
            console.error('Error al eliminar los datos', error);
        }
    };

    

    return (
        <TouchableOpacity className="items-center justify-center" onPress={removeData}>
            <View style={styles.button} >
                {children}
                <Text style={styles.text} >{text}</Text>
            </View>
        </TouchableOpacity>
        
    );
}



export function AnimatedLinkComponent({ href, text ,children, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 80,
            useNativeDriver: true
        }).start();
    }, [opacity, index]);

    if (text === "Salir") {
        return (
            <Animated.View style={{ opacity }}>
                <ExitComponent text={text}>
                    {children}
                </ExitComponent>
            </Animated.View>
        );
    }

    return (
        <Animated.View style={{ opacity }}>
            <LinkComponent href={href} text={text}>
                {children}
            </LinkComponent>
        </Animated.View>
    );

}   
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f6f3ff",
        borderStyle: "solid",
        borderWidth: 2,
        paddingVertical: 10,
        width: 70,
        height: 70,
        flex: 1,
        borderRadius: 10,
        color: "#340e67",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#340e67",
        fontWeight: "bold",
        fontSize: 10,
        textAlign: "center",
        paddingInline: 5,
    },
}); 