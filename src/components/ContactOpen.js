import React from 'react'
import './ContactOpen.css'

class ContactOpen extends React.Component{
  render() {
    const {contact, setOpenCard} = this.props
    return (
      <div className="openContactContainer">
        <div onClick={()=>setOpenCard('')} className="openContactClose" >X</div>
        <div className="leftContainer">
          <img src={contact.picture.large} alt="Contact profile" className="avatar" />
        </div>
        <div className="rightContainer">  
          <span className="openContactName">  
            {contact.name.last.toUpperCase()}, {contact.name.first}  
          </span>
          <table className="openContactDetails" cellPadding='0px' cellmargin='0px'>
            <tbody>
            <tr>
              <th>e-mail</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>phone</th>
              <td>{contact.cell}</td>
            </tr>
            <tr>
              <th>street</th>
              <td>{contact.location.street.number} {contact.location.street.name}</td>
            </tr>
            <tr>
              <th>city</th>
              <td>{contact.location.city}</td>
            </tr>
            <tr>
              <th>state</th>
              <td>{contact.location.state}</td>
            </tr>
            <tr>
              <th>postcode</th>
              <td>{contact.location.postcode}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="contactUsername">
            USERNAME {contact.login.username}
        </div>
      </div>
    )      
  }
}

export default ContactOpen