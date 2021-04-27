import React from 'react';
import AlphabetTabs from '../components/AlphabetTabs'
import ContactTables from '../components/ContactTables'
import {alphabetizeList} from '../utils/dataHelpers'
import './ContactList.css';
import axios from 'axios'

class ContactList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contactList: {},
      selected: 'a'
    }

    this.setSelected = this.setSelected.bind(this);
  }

  getData(){
    axios.get('https://randomuser.me/api/?results=200&nat=nl,us,dk,fr,gb').then(res => {
      var data = alphabetizeList(res.data.results)
      this.setState({contactList : data})

    })
  }

  componentDidMount(){
    this.getData()
  }

  setSelected(value){
    this.setState({selected:value})
  }

  render(){
    const { contactList, selected } = this.state
    
    return (
      <div className="contactListContainer"> 
        <AlphabetTabs 
          contacts={contactList} 
          selected={selected} 
          setSelected={this.setSelected.bind(this) }
          />
        <ContactTables
          contacts={contactList} 
          selected={selected}  
          />  
      </div>
    )
  }
}

export default ContactList
