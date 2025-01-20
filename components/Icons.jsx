import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const UserIcon=(props)=> {
    return <FontAwesome name="user-o" size={28} color="white" {...props} />;
}   

export const HomeIcon=(props) =>{
    return <FontAwesome name="home" size={28} color="white" {...props} />;
}

export const InfoIcon=(props) =>{
    return <FontAwesome name="info" size={28} color="white" {...props} />;
}

export const CalendarIcon=(props) =>{
    return <FontAwesome name="calendar" size={28} color="white" {...props} />;
}


export const IconDefauld=(props) =>{
    return <FontAwesome size={28} color="white" {...props} />;
}