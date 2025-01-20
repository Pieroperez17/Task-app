
export function TareasDelDia({ task }) {
    return (
        <View style={styles.card}>
            <Image source={task.image} style={styles.image} />
            <Text style={styles.title} >
                {task.title}
            </Text>
            <Text style={styles.description} >
                {task.description.slice(0, 100)}...
            </Text>
        </View>
    );
}   