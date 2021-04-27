import React from 'react'
import ContactDetail from '../components/ContactDetail'
import './ContactTables.css'

class ContactTables extends React.Component{

  render() {
    const {contacts, selected} = this.props
    console.log('ContactTables', contacts, selected)
    let selectedContacts = []
    if(typeof contacts[selected] !== 'undefined'){
      selectedContacts = contacts[selected]
    }
    
    console.log('selectedContacts', selectedContacts)

    return (
      <div className="tablesContainer">
        { selectedContacts.map((contact, k) => 
          <ContactDetail 
            contact={contact} 
            key={k}
          />
        )}
      </div>
    )      
  }
}

export default ContactTables