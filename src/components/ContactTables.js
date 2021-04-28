import React from 'react'
import ContactDetail from '../components/ContactDetail'
import './ContactTables.css'

class ContactTables extends React.Component{

  render() {
    const {contacts, selected, openCard, setOpenCard} = this.props
    let selectedContacts = []
    if(typeof contacts[selected] !== 'undefined'){
      selectedContacts = contacts[selected]
    }

    return (
      <div className="tablesContainer">
        <div className="centerContainer">
        { selectedContacts.map((contact, k) => 
          <ContactDetail 
            contact={contact} 
            openCard={openCard}
            setOpenCard={setOpenCard.bind(this)}
            key={k}
          />
        )}
        </div>
      </div>
    )      
  }
}

export default ContactTables