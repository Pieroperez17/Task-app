import { Link } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../../components/Screen";
import { getGameDetails } from "../../lib/metacritic";
import { useEffect, useState } from "react";

export default function TaskNew(){
    const { value } = useLocalSearchParams();
        console.log(value)
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
                        value=== null ? (
                            <ActivityIndicator color={"#ffee00"} size={"large"} />
                        ) :(
                            <Text className=" text-white font-bold mb-8 text-2xl text-center">
                                hello {value}
                            </Text>
                        )
                    }
                    
                </View>
            </Screen>
        )}
        
    
}
