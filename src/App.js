import React from 'react';
import Counter from './Counter'

import ListThing from './ListThing'


// function component ( cannot have state )
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <ListThing />
    </div>
  );
};

export default App;
