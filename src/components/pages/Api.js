import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  constructor(){
    super(); 

    this.state = {
        persons: [],
        countrys: [],
    }
  }

  componentDidMount()
  {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });

    axios.get(`http://sdeveloper.dx.am/common_controller/Country_api`)
      .then(res => {
        const countrys = res.data;
        this.setState({ countrys });
      });
  }

  render() {
    return (
       <div>
        <p> Iam Api Classs </p>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>

        <p> Iam Api Country Classs </p>
        <ul>
          { this.state.countrys.map(countrys => <li>{countrys.State_name}</li>)}
        </ul>
       </div>
    );
  }
}

export default Api;
