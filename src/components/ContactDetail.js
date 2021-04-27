import React from 'react'
import ContactOpen from '../components/ContactOpen'
import './ContactDetail.css'

class ContactDetail extends React.Component{

    render() {
      const {contact} = this.props
      
      return (
        <div className="contactContainer">
          {contact.name.first}, {contact.name.last.toUpperCase()} 
          <ContactOpen contact={contact} />
        </div>
      )      
    }
  }
  
  export default ContactDetail