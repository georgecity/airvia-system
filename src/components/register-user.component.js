import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from '../actions/userActions';
import PropTypes from 'prop-types';
import axios from 'axios';


 export default class RegisterUser extends Component {

    constructor(props) { 
        super(props);  

        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //state is how u create variables in react
        this.state = { 
            name: " ", 
            address: " ",
            contactNumber: "",
            email: " ",
            password: " ",
            role: "Advisor" 
        }
    }
   

    /*onChangename = (e) => { 
        this.setState( {   
            [e.target.name]: e.target.value
        });
    *///}
    onChangeName(e) { 
        this.setState( { name: e.target.value });
    }

    onChangeAddress(e) { 
        this.setState( { address: e.target.value });
    }

    onChangeContactNumber(e) { 
        this.setState( { contactNumber: e.target.value });
    }

    onChangeEmail(e) { 
        this.setState( { email: e.target.value });
    }

    onChangePassword(e) { 
        this.setState( { password: e.target.value });
    }

    onChangeRole(e) { 
        this.setState( { role: e.target.value });
    }

    onSubmit(e) {
        //since is a form we have to prevent the form from submitting
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        //Add item via Additem action
        axios.post('http://localhost:5000/users/register', newUser) 
            .then(res => console.log(res.data));

        window.location = '/';

    };


    render() {
        return(
            //form code 
            <div>
                <h3>Register User</h3>
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
                        <input 
                            type="text"
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
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.role}
                            onChange={this.onChangeRole}>
                                <option>Advisor</option>
                                <option>Office Manager</option>
                                <option>Admin</option>
                                </select> 
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}

