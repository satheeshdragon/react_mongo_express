import React, { Component } from "react";
import { Table,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";

class Excer extends Component {
  constructor(props){
    super(props); 

    this.dataDeleteAction = this.dataDeleteAction.bind(this);

    this.state = {
        exercises: [],
    }
  }

  componentDidUpdate() {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        const exercises = res.data;
        this.setState({ exercises });
      });
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        const exercises = res.data;
        this.setState({ exercises });
      });
  }

  dataDeleteAction(id)
  {
    console.log(id);
    axios.delete('http://localhost:5000/exercises/delete/'+id,)
      .then(res => {
        console.log(res.data);
      });
  }

  dire_fun(){
    this.props.history.push('/Exer');
  } 

  render() {
    return (
       <div>
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h1> Excer Data </h1>  
                </div> <br/>

                <div className="col-lg-12">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>User name</th>
                      <th>Description</th>
                      <th>Duration</th>
                      <th>Date</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    { 
                      this.state.exercises.map
                      (exercises => 
                        <tr>
                          <td>{exercises._id}</td>
                          <td>{exercises.username}</td>
                          <td>{exercises.description}</td>
                          <td>{exercises.duration}</td>
                          <td>{exercises.date}</td>
                          <td>

                          <Link variant="primary" to={"/E_edit/"+exercises._id}>

                          <Button variant="primary" type="button"  >
                          EDIT
                        </Button>

                        </Link>

                        </td>

                        <td>

                        <Button variant="danger" type="button" 
                        onClick = { () => { this.dataDeleteAction(exercises._id) } }

                        >
                          DELETE
                        </Button>

                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
                </div> <br/>

            </div>
       </div>
    );
  }
}

export default Excer;
