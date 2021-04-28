import React from 'react'
import ContactOpen from '../components/ContactOpen'
import './ContactDetail.css'

class ContactDetail extends React.Component{
  
    render() {
      const {contact, openCard, setOpenCard} = this.props

      let openBlock = ''
      if(openCard === contact.login.username){
        openBlock = <ContactOpen 
          className="contactOpenContainer" 
          setOpenCard={setOpenCard.bind(this)}
          contact={contact}  
          />
      }

      return (
        <div className="contactContainer" >
          <span onClick={()=>setOpenCard(contact.login.username)} className="contactContainerLink">{contact.name.first}, {contact.name.last.toUpperCase()} </span>
          {openBlock}
          
        </div>
      )      
    }
  }
  
  export default ContactDetail