import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      name: ''
    }
  }

  changeName = (param) => {

    this.setState({name: param})

  }


  render() {
    return (
      <div>
        <Select change={this.changeName}/>
        <Name nm={this.state.name}/>
      </div>
    );
  }
}













