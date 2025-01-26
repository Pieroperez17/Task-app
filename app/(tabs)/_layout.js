import { Tabs } from "expo-router";
import { CalendarIcon, HomeIcon, UserIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: "#000"},
                tabBarActiveTintColor: "#A77CFC",
            }}
        >
            <Tabs.Screen
                name="calendario"
                options={{
                    title: "Calendario",
                    tabBarIcon: ({color}) => <CalendarIcon color={color}/>,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({color}) => <HomeIcon color={color}/>,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: "Usuario",
                    tabBarIcon: ({color}) => <UserIcon color={color}/>,
                }}
            />
        </Tabs>
    );
}