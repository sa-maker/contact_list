import React from 'react';
import AlphabetTabs from '../components/AlphabetTabs'
import ContactTables from '../components/ContactTables'
import {tabeliseList} from '../utils/dataHelpers'
import './ContactList.css';
import axios from 'axios'
import {title, userUrl, numberCards, tabs } from './contactListConfig.json'

class ContactList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contactList: {},
      selected: 'a',
      openCard: ''
    }

    this.setSelected = this.setSelected.bind(this)
    this.setOpenCard = this.setOpenCard.bind(this)
  }

  getData(){
    axios.get(userUrl+'?results='+numberCards+'&nat=nl,us,dk,fr,gb').then(res => {
      var data = tabeliseList(res.data.results, tabs)
      this.setState({contactList : data})
    })
  }

  componentDidMount(){
    document.title = title
    this.setSelected(tabs[0])
    this.getData()
  }

  setSelected(value){
    this.setState({selected:value})
  }

  setOpenCard(value){
    this.setState({openCard:value})
  }

  render(){
    const { contactList, selected, openCard } = this.state
    
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
          openCard={openCard} 
          setOpenCard={this.setOpenCard.bind(this) }
          />  
      </div>
    )
  }
}

export default ContactList
