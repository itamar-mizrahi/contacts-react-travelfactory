import React from 'react'
import { useState } from 'react'

import Alex from '../Assets/alex-jonathan.jpg'
import Janeth from '../Assets/janeth carton.jpg'
import John from '../Assets/michael zimber.jpg'
import Michael from '../Assets/john-smith.jpg'
import Monica from '../Assets/monica smith.jpg'
import Sandra from '../Assets/sandra smith.jpg'
export const Contact = () => {
//TODO:add feild of the google API-{error_message: "You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable Learn more at https://developers.google.com/maps/gmp-get-started",results: [ ],status: "REQUEST_DENIED"}
    const data = [
        { id: 1, name: "alex jonathan", src:Alex },
        { id: 2, name: "janeth carton", src:Janeth },
        { id: 3, name: "michael zimber" , src:Michael},
        { id: 4, name: "john smith" , src:John },
        { id: 5,  name: "monica smith" ,src:Monica },
        { id: 6,  name: "sandra smith" ,src:Sandra }
      ];
    const [contact, setContact] = useState(data);
    const [clickEdit, setClickEdit] = useState(true);
    return (
        <div className="users">
      {data.map((user) => (
        <div className="user">{user.id}<input type="text" id={'input'+user.id}  placeholder={user.name} ></input>
        <img className="profile-photo" src={user.src} alt={user.name}/>
        <button id={'delete'+user.id} className="button" onClick={()=>{deleteUser(user.id)}}>delete</button>
        <button id={'edit'+user.id} onClick={(id)=>{
          console.log(id);
        //document.getElementById('edit'+id).clicked=!clickEdit
        // console.log(document.getElementById('edit'+id).clicked);
        document.getElementById('input'+id).setAttribute("disabled","disabled");
        console.log(document.getElementById('input'+id).disabled); 
        //document.getElementById('input'+id).disabled=setClickEdit(!clickEdit); 
    //!document.getElementById('input'+id).disabled
          //setClickEdit(!clickEdit)
        }}>edit</button>
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
document.getElementById('delete'+id).parentElement.remove()//TODO:local storage(?)
}


