import { Stack, Link } from "expo-router";
import { View, Pressable } from "react-native";
import { Logo } from "../components/extraComp/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => ''
                }}
            /> 
        </View>
    );
}