import React from 'react';

// class-based ( because we are using state here )
class Counter extends React.Component {

  state = {
    count: 0
  };

  // gets called when button is clicked
  handleIncrementClick = () => {

    // never assign to this.state.anything
    // this.state.count = this.state.count + 5    

    // this changes the state object, and then rerenders the entire page
    this.setState({
      count: this.state.count + 5
    })
  }

  // declarative
  render() {
    return (
      <div>
        <div>This is the current count : {this.state.count}</div>
        <button onClick={this.handleIncrementClick}> + </button>
      </div>
    );
  }
}

export default Counter;