import React from 'react';
import { useEffect, useRef } from 'react';
import { TouchableOpacity, View, Image, Text ,Animated} from 'react-native';
import { Link } from 'expo-router';

const NewComponent_United = ({ noticia }) => (
    <Link href={`/news/${noticia.id}`} asChild>
        <TouchableOpacity>
            <View 
                className=" flex-row items-center justify-center mx-auto rounded-xl mb-7 p-2" 
                style={{ width: '95%' , backgroundColor: '#19191B'}}
            >
                <Image className="rounded-xl" source={{ uri: noticia.image1 }} style={{ width: 150, height: 100 }} />
                <View className="flex-shrink pl-2">
                    <Text className="text-white text-base font-semibold m-0 p-0 lete flex-shrink w-45 tracking-tighter ">{noticia.title}</Text>
                    <Text className="text-slate-400 text-xs flex-shrink  w-36">{noticia.time.slice(0, 10)}</Text>
                    <Text className="text-white text-xs flex-shrink  w-36">{noticia.content.slice(0, 40)} ...</Text>
                </View>
            </View>
        </TouchableOpacity>
    </Link>
);
export function NewComponent({ noticia, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <NewComponent_United noticia={noticia}/>
        </Animated.View>
    );
}   