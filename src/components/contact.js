import React from 'react'
import { useState } from 'react'

import Alex from '../Assets/alex-jonathan.jpg'
import Janeth from '../Assets/janeth carton.jpg'
import John from '../Assets/michael zimber.jpg'
import Michael from '../Assets/john-smith.jpg'
import Monica from '../Assets/monica smith.jpg'
import Sandra from '../Assets/sandra smith.jpg'
export const Contact = () => {

    const data = [
        { id: 1, name: "alex jonathan", src:Alex },
        { id: 2, name: "janeth carton", src:Janeth },
        { id: 3, name: "michael zimber" , src:Michael},
        { id: 4, name: "john smith" , src:John },
        { id: 5,  name: "monica smith" ,src:Monica },
        { id: 6,  name: "sandra smith" ,src:Sandra }
      ];
    const [contact, setContact] = useState(0);
    return (
        <div className="users">
      {data.map((user) => (
        <div className="user">{user.id}.{user.name}
        <img className="profile-photo" src={user.src} alt={user.name}/>
        <button id={user.id} className="button" onClick={()=>{deleteUser(user.id)}}>delete</button>
        <button onClick={editUser()}>edit</button>
        </div>
        ))}

        <button onClick={validatePhone()}>+</button>
        
    </div>
    
    )
}

function validatePhone(){
  const regexPhone='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'

}

function deleteUser(id){
console.log(id);
document.getElementById(id).parentElement.remove()//TODO:local storage(?)
}

function editUser(){

}
