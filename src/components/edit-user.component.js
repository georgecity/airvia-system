import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
export default class EditExercise extends Component {

    constructor(props) { 
        super(props);  

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            name: " ", 
            address: " ",
            contactNumber: " ",
            email: " ",
            password: "",
            role: " ",
            users: [] 
        }
    }

    componentDidMount() {  
        axios.get("http://localhost:5000/users/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    contactNumber: response.data.contactNumber,
                    email: response.data.email,
                    password: response.data.password,
                    role: response.data.role,
                    
                })
            })
            .catch(function (error) {
                console.log(error);
            })
       
    }

    onChangeName(e) { 
        this.setState( {   
            name: e.target.value
        });
    }
    
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeContactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

    onChangeEmail(e) {           
        this.setState({
            email: e.target.email
        });
    }

    onChangePassword(e) {           
        this.setState({
            password: e.target.password
        });
    }

    onChangeRole(e) {           
        this.setState({
            role: e.target.role
        });
    }

    onSubmit(e) { 
        e.preventDefault(); 
        
        const user = {            
            name: this.state.name, 
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }

        console.log(user); 

        axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, user) 
            .then(res => console.log(res.data));

        window.location = '/'; 
    }

    render() {
        return(
            <div>
                <h3>Edit User Details</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            />
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.contactNumber}
                            onChange={this.onChangeContactNumber}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>
                    <div className="form-group">
                        <label>Role: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.role}
                            onChange={this.onChangeRole}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit User Details" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}