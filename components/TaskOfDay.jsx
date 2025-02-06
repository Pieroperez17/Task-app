import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



export function TareasDelDia({ task }) {

    function getFinalTime(fecha) {
        var inicio = fecha.slice(0,2);
        var horario1 = "AM";
        var horario2 = "AM";
        var final = fecha.slice(3,5);
        if(inicio>12){
            inicio = inicio - 12;
            horario1 = "PM";
        }
        if(final>12){
            final = final - 12;
            horario2 = "PM";
        }
        return `${inicio} ${horario1} - ${final} ${horario2}`;
    }

    const DiasRecurrencia = ({ dias }) => {
        const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    
        return (
            <View style={styles.container}>
                {diasSemana.map((dia, index) => (
                    <View
                        key={index}
                        style={[
                            styles.circle,
                            (dias).includes(dia) ? styles.activeCircle : styles.inactiveCircle,
                        ]}
                    >
                        <Text style={styles.text}>{dia}</Text>
                    </View>
                ))}
            </View>
        );
    };







    return (
        <View style={styles.card}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}} className="rounded-lg w-fit float-center bg-white" >
                <Text style={styles.title}>📌 {(task.task)}</Text>
            </View>
            <DiasRecurrencia dias={task.recurrence} />
            <Text style={styles.description} >
                {getFinalTime(task.finaly_time)}
            </Text>
        </View>
    );
}   

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 'fit-content',
        margin: 'auto',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#19191B",
    },
    title: {
        //color: "#340e67",
        color: "white",
        textAlign: "center",
        fontSize: 20,
        padding: 5,
        fontWeight: "bold",
    },
    description: {
        color: "gray",
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    //Circle
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        width: '80%',
        marginVertical: 10,
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    activeCircle: {
        backgroundColor: '#A77CFC',
    },
    inactiveCircle: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    }
});