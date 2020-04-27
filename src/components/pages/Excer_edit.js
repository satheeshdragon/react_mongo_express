import React, { Component } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "axios";

class Excer_edit extends Component {
  constructor(props){
    super(props); 

    this.onChangeUsername    = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration    = this.onChangeDuration.bind(this);
    this.onChangeDate        = this.onChangeDate.bind(this);
    this.onSubmit        = this.onSubmit.bind(this);

    this.state = {
        username: '',
        description: '',
        duration: '',
        date: ''
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(res => {
        const exercises = res.data;
        console.log(exercises);
        this.setState({ 
          username: exercises.username,
          description: exercises.description,
          duration: exercises.duration,
          date: exercises.date
        });
      });
      console.log(this.props.match.params.id);


    // axios.get(`http://sdeveloper.dx.am/common_controller/Country_api`)
    //   .then(res => {
    //     const countrys = res.data;
    //     this.setState({ countrys });
    //   });

    this.setState({
        username: '',
        description: '',
        duration: '',
        date: '',
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

     console.log(exerc);

     axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id,exerc)
      .then(res => {
        // console.log(res.data);
        // window.locaton = '/';
      });
      this.props.history.push('/E_view');

     // window.locaton = '/';
  }

  render() {
    return (
       <div>
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h1> EXE EDIT </h1>  
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

export default Excer_edit;
