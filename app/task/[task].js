import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../../components/Screen";
import { getGameDetails } from "../../lib/metacritic";
import { useEffect, useState } from "react";
import {Score} from "../../components/Score";

export default function TaskNew(){
    const { task } = useLocalSearchParams();



    
        if(task === 'datitos'){
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
                        task=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                {task}
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
                        headerStyle: { backgroundColor: "#ffee00" },
                        headerTintColor: "black",
                        headerLeft: () => {},
                        headerTitle: `wa`,
                        headerRight: () => {},
                        contentStyle: { backgroundColor: 'black' },
                }}
                />
                <View>
                    {
                        task=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                hello {task}
                            </Text>
                        )
                    }
                    
                </View>
            </Screen>
        )}
    
}
