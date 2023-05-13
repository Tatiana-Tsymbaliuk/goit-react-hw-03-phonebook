
import React from 'react';
import './ContactList.css'
const ContactList =({contacts, onDeleteTodo})=>{      
return (<ul>
      {contacts.map(({id, name, number}) => (
        <li key ={id} className='listData'> {name} - {number}

        <button className = 'listBtn' onClick={()=>onDeleteTodo(id)}>Удалить</button></li>
      ))}
      </ul>)
}





export default ContactList;