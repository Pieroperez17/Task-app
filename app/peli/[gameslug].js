import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../../components/Screen";
import { getGameDetails } from "../../lib/metacritic";
import { useEffect, useState } from "react";
import {Score} from "../../components/Score";

export default function Detail(){
    const { gameslug } = useLocalSearchParams();
    const [gameInfo, setGameInfo] = useState(null); 

    useEffect(() => {
        if (gameslug) {
            getGameDetails(gameslug).then(setGameInfo);
        }
    },[gameslug]);



    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: `${gameInfo=== null ? `${gameslug}` : gameInfo.title}`,
                    headerRight: () => {},
                    contentStyle: { backgroundColor: 'black' },
            }}
            />
            <View>
                {
                    gameInfo=== null ? (
                        <ActivityIndicator color={"#ffee00"} size={"large"} />
                    ) :(
                        <ScrollView>
                            <View className="justify-center items-center text-center">
                                <Image source={{ uri: gameInfo.img }} className="mb-4 rounded" style={{width:214, height:294}} />
                                <Score score={gameInfo.score} maxScore={100}/>
                                <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                    {gameInfo.title}
                                </Text>
                                <Text className=" text-white/70 mt-4 text-left mb-8 text-base">
                                    {gameInfo.description}
                                </Text>
                                <Text className=" text-white/70 mt-4 text-left mb-8 text-base">
                                    {gameInfo.reviews[0].quote}
                                </Text>
                            </View>
                        </ScrollView>
                    )
                }
                
            </View>
        </Screen>
    );
}
    