import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "axios";
// import  { Redirect } from 'react-router-dom'

class Excer extends Component {
  constructor(){
    super(); 

    this.onChangeUsername    = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration    = this.onChangeDuration.bind(this);
    this.onChangeDate        = this.onChangeDate.bind(this);
    this.onSubmit        = this.onSubmit.bind(this);

    this.state = {
        username: '',
        description: '',
        duration: '',
        date: new Date(),
        
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        const exercises = res.data;
        this.setState({ exercises });
      });

    // axios.get(`http://sdeveloper.dx.am/common_controller/Country_api`)
    //   .then(res => {
    //     const countrys = res.data;
    //     this.setState({ countrys });
    //   });

    this.setState({
        username: '',
        description: '',
        duration: '',
        date: new Date(),
     });


  }

  onChangeUsername(e) {
     this.setState({
       username: e.target.value
     });
  }

  onChangeDescription(e) {
     this.setState({
       description: e.target.value
     });
  }

  onChangeDuration(e) {
     this.setState({
       duration: e.target.value
     });
  }

  onChangeDate(e) {
     this.setState({
       date: e.target.value
     });
  }

  onSubmit(e) {

    e.preventDefault();

     const exerc = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date,
     }

     // console.log(exerc);

     axios.post('http://localhost:5000/exercises/add',exerc)
      .then(res => {
        // window.locaton = 'E_view';
        // console.log(res.data);
        // return <Redirect to='/E_view'  />
      });

      this.props.history.push('/E_view');

     

  }

  render() {
    return (
       <div>
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h1> EXE INSERT </h1>  
                </div> <br/>

                <div className="col-lg-12">
                      <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" required placeholder="Enter Username"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="Description" 
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Duration</Form.Label>
                          <Form.Control type="text" placeholder="Duration" 
                          value={this.state.duration}
                          onChange={this.onChangeDuration}
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Date</Form.Label>
                          <Form.Control type="text" placeholder="Date" 
                          value={this.state.date}
                          onChange={this.onChangeDate}
                          />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit"  >
                          ADD
                        </Button>
                      </Form>
                </div> <br/>

            </div>
       </div>
    );
  }
}

export default Excer;
