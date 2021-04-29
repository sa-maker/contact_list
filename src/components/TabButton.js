import React from 'react';
import './TabButton.css';

class TabButton extends React.Component{

  getButtonClass(selected){
    let ret_val = "tabButton " 
    if(selected){
      ret_val += "selected "
    }
    return ret_val
  }

  render() {
    const {value, length, selected, setSelected } = this.props
    
    
    return (
      <button 
        disabled={length === 0} 
        className={this.getButtonClass(selected)} 
        onClick={() => setSelected(value)  }
      >
          <span className="buttonValue">{value}</span>
          <span className="buttonLength">{length}</span>
      </button>    
      )
  }
}

export default TabButton;
