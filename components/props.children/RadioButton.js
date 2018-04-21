import React from 'react';

const RadioButton = (props) => {
    return (
      <label>
        <input type="radio" value={ props.value } name={ props.name } />
        { props.label }
      </label>
    )
  }


export default RadioButton;