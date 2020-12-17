import React from 'react';

// function component ( cannot have state )
const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.theLabel}</label>
      <div className="control">
        <input className="input" type={props.myType} placeholder={props.myPlaceholder} />
      </div>
    </div>
  );
};

export default FormField;
