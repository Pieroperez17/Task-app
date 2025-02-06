import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../../components/Screen";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function NewsPage(){
    const { news } = useLocalSearchParams();
    const [news_data, setNews_data] = useState([]);
    const [data_news, setData_news] = useState([]);

    useEffect(() => {
        const fechNews = async () => {
            const{data,error}= await supabase.from('News').select('*')
            if (error) console.log('error',error)
            else {
                setNews_data(data)
            }
        }
        fechNews()
    }, []);

    useEffect(() => {
        if (news_data.length > 0) {
            const noticia = news_data.find((noticia) => noticia.id == news);
            setData_news(noticia);
        }
    }, [news_data, news]);
    


    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#19191B" },
                    headerTintColor: "white",
                    headerLeft: () => {},
                    headerTitle: `Volver`,
                    headerRight: () => {},
                    contentStyle: { backgroundColor: 'black' },
            }}
            />
            <View>
                {
                    news_data.length === 0  ? (
                        <View className="justify-center items-center text-center w-full h-full" >
                            <ActivityIndicator color={"#340e67"} size={"large"} />
                        </View>
                    ) :(
                        <ScrollView>
                            <View className="justify-center mx-auto items-center text-center w-11/12 mt-4 pb-2 rounded-lg" style={{backgroundColor: "#19191B"}}>
                                <Image source={{ uri: data_news.image2 }} className=" mb-4 rounded-lg w-full " style={{height:160}} />
                                <Text className="text-white text-3xl font-bold mx-4 ">{data_news.title}</Text>
                                <Text className="text-slate-500 text-sm font-bold mx-4 ">{data_news.time}</Text>
                                <Text className="text-white mt-4 text-sm  font-bold mx-4 ">{data_news.content}</Text>
                            </View>
                        </ScrollView>
                    )
                }
                
            </View>
        </Screen>
    );
}
    