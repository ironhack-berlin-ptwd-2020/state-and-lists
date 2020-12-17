import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton';


// function component ( cannot have state )
const App = () => {
  return (
    <div>
      <Navbar />
      <FormField theLabel="Name" myPlaceholder="Alex Smith" myType="text" />
      <FormField theLabel="Email" myPlaceholder="my-email@hello.com" myType="text" />
      <FormField theLabel="Password" myPlaceholder="12345" myType="password" />

      {/* <CoolButton className="button is-rounded my-class"></CoolButton> */}
      {/* <CoolButton className="button is-success my-class"></CoolButton> */}

      <CoolButton isSmall isDanger={true}></CoolButton>
      <CoolButton isSuccess={true}></CoolButton>
    </div>
  );
};

export default App;
