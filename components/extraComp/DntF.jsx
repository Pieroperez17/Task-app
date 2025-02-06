import { View , Text,StyleSheet} from "react-native"
import { IconDefauld } from "../Icons";

export const DontFount = ({Page}) => {
    return (
        <View style={styles.card} >
            <IconDefauld name="user-secret" color="#A77CFC" style={styles.img} size={180}/>
            <Text style={styles.title} >Usuario No Registrado ❌</Text>
            <Text style={styles.text} >La Pagina {Page} no fue encontrada</Text>
            <Text style={styles.text} >Registrate para encontrar mas informacion</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 'fit-content',
        margin: 'auto',
        borderRadius: 70,
        padding: 10,
    },
    img: {
        width: '140',
        height: '160px',
        margin: 'auto',
        marginBottom: 20,
    },
    title: {
        color: "white",
        paddingBottom: 30,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        color: "gray",
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
});