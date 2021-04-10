import React from 'react';
import { wishes } from "./wishes";

export class Name extends React.Component {
  render() {

    return (
      <div>
        <h1>Hey, my name is {this.props.nm}!</h1>
        <h2>Don't you think {this.props.nm} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {this.props.nm}!</h2>
        <p>{wishes[Math.floor(Math.random() * wishes.length)]}</p>
      </div>
    );
  }
}








