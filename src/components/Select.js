import React from 'react';


export class Select extends React.Component {

  constructor(props){
    super(props)
   this.state = {
     items: []
   }

  }

  handleChange =(e) => {
      let hand = e.target.value;

    this.props.change(hand)
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {console.log(json)
    this.setState({items: json})})
    .catch((err) => {console.log(err)})
  }


  // {this.getNames()}

  render() {
    
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          {this.state.items.map((item, item2) => {
            return <option key={item2} value={item.name}>{item.name}</option>
          })}
          {/* <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> */}
        </select>

      </div>
    );
  }
}