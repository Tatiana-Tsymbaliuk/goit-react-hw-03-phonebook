
import React from 'react';
import { nanoid } from 'nanoid'
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends React.Component{
  state = {
    contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, 
  ],
    filter: '',
    }  
    
    handleSubmit = (data) => {
      const sameName = this.state.contacts
        .map((cont) => cont.name)
        .includes(data.name);
      if (sameName) {
        alert(`${data.name} is already in contacts`);
      } else {
        this.setState((prevState) => ({
          contacts: [...prevState.contacts, {id: nanoid(), ...data }],
        }));
      }
    };
    changeFilter =(e)=>{
      this.setState({filter:e.currentTarget.value})
    }
    getVisibleContats =()=>{
      const {contacts, filter} = this.state
      console.log(this.state); 
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    deleteTodo = todoId =>{
      this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact=>contact.id !== todoId),
    }));}
    componentDidMount(){
      console.log('App componentDidMount');
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      console.log(parsedContacts);
      this.setState({contacts: parsedContacts });
    }

    componentDidUpdate(prevProps, prevState){
      console.log('App componentDidUpdate');
      console.log(prevState);
      console.log(this.state);
      if(this.state.contacts !==prevState.contacts){
        console.log('Обновилось поле contacts');
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts) );
      }
    }

    render(){
      console.log('App render');
    const {filter} = this.state
    const visibleContacts = this.getVisibleContats()

    return (<div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={this.handleSubmit}/>
      <h2>Contacts</h2> 
      <Filter value={filter} onChangeFilter={this.changeFilter}/>
      <ContactList contacts={visibleContacts} onDeleteTodo={this.deleteTodo}/>
    </div>) 
    }    
}

