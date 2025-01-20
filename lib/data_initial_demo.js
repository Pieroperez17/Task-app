export async function getDataGroups() {
    // Simulando la respuesta de la API con datos de películas reconocidas
    const simulatedData = [
        {
            name_group: "Familia Perez Garcia",
            integrants_id: [1,2,3,4],
        },
    ];
    
        return simulatedData;
    }

export async function getUserData(slug) {
    // Simulando la respuesta de la API con datos de una película específica
    const dataUsers = [
        {id:1 ,username: "Juan Perez", age: 45, role: "Padre", image: "https://www.pikpng.com/pngl/m/80-805941_avatar-avatar-png-clipart.png"},
        {id:2 ,username: "Maria Garcia", age: 42, role: "Madre", image: "https://www.pikpng.com/pngl/m/80-805941_avatar-avatar-png-clipart.png"},
        {id:3 ,username: "Pedro Perez", age: 20, role: "Hijo", image: "https://www.pikpng.com/pngl/m/80-805941_avatar-avatar-png-clipart.png"},
        {id:4 ,username: "Ana Perez", age: 15, role: "Hija", image: "https://www.pikpng.com/pngl/m/80-805941_avatar-avatar-png-clipart.png"},

    ];
    
    return dataUsers;
}
