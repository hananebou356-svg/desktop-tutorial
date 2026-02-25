let users = [];
let nextId = 1;

export const addUser = (name,age,city)=>{
    const user ={id: nextId++,name,age,city};
    users= [...users,user];
}

export function getUsers() {
    return users;
}

export function showUsers(){
    for(const {id,name,city} of users){
        console.log(`${id} - ${name} ${city}`)
    }
}; 