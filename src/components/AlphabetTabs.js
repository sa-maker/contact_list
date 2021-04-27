import React from 'react';
import TabButton from '../components/TabButton'
import './AlphabetTabs.css';

class AlphabetTabs extends React.Component{

  render() {
    const {contacts, selected, setSelected} = this.props
    return (
      <div className="tabContainer">
        { Object.entries(contacts).map((t,k) => 
          <TabButton 
            value={t[0]} 
            length={t[1].length} 
            extraButton={typeof contacts['_'] !== 'undefined'} 
            selected={selected===t[0]}
            setSelected={setSelected.bind(this) }
            key={k}
          />
        )}
      </div>
    )
  }
}

export default AlphabetTabs;
