import React from 'react';
import './TabButton.css';

class TabButton extends React.Component{

  getButtonClass(extraButton, selected){
    let ret_val = "tabButton " 
    if(extraButton) {
      ret_val += "extraButton "
    }
    if(selected){
      ret_val += "selected "
    }
    return ret_val
  }

  render() {
    const {value, length, extraButton, selected, setSelected } = this.props
    
    
    return (
      <button 
        disabled={length === 0} 
        className={this.getButtonClass(extraButton, selected)} 
        onClick={() => setSelected(value)  }
      >
          <span className="buttonValue">{value}</span>
          <span className="buttonLength">{length}</span>
      </button>    
      )
  }
}

export default TabButton;
