import { Text,View,Pressable,StyleSheet } from "react-native";
import { Link } from "expo-router";
import {  IconDefauld} from "./Icons";
import { AnimatedLinkComponent } from "./LinkInicial";
export function OpcionesInicio() {
    return (
        <View style={styles.card}>
            <AnimatedLinkComponent href="/options/misTareas" text="Mis Tareas" index={1}>
                <IconDefauld name="tasks" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/federico" text="Nuevo Grupo" index={2}>
                <IconDefauld name="group" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/datitos" text="Mensajería" index={3}>
                <IconDefauld name="send" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/federico" text="Salir" index={4}>
                <IconDefauld name="sign-out" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/federico" text="Gestionar Finanzas" index={2}>
                <IconDefauld name="group" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/datitos" text="Agregar Fecha" index={3}>
                <IconDefauld name="calendar" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/federico" text="Notas" index={4}>
                <IconDefauld name="sticky-note" color="#340e67"/>
            </AnimatedLinkComponent>

            <AnimatedLinkComponent href="/options/datitos" text="Reportes Financieros" index={5}>
                <IconDefauld name="line-chart" color="#340e67"/>
            </AnimatedLinkComponent>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#19191B",
        borderRadius: 8,
        marginHorizontal: 16,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 13,
        justifyContent: "center",
    }
}); 