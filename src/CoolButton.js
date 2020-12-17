import React from 'react';


// function component ( cannot have state )
const CoolButton = (props) => {

  let htmlClasses = "button "
  if (props.isSuccess) {
    htmlClasses += "is-success "
  }
  if (props.isDanger) {
    htmlClasses += "is-danger "
  }
  if (props.isSmall) {
    htmlClasses += "is-small "
  }

  return (
    <button className={props.className}>Button 1</button >
  );
};

export default CoolButton;
