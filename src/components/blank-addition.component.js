import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBlank} from '../actions/blankActions';
import PropTypes from 'prop-types';
import axios from 'axios';


 export default class AddBlank extends Component {

    constructor(props) { 
        super(props);  

        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeBlankID = this.onChangeBlankID.bind(this);
        this.onChangeBlankType = this.onChangeBlankType.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //state is how u create variables in react
        this.state = { 
            owner: " ", 
            blankType: "444",
            blankID: " ",
            status: " ", 
            users: []
        }
    }

    componentDidMount() {  //react life cycle method automatically called right before anything displays the page
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.name), //to avoid giving different fields of the user array, map allow us to return data foe every item in the array
                        owner: response.data[0].name
                    })
                }
            })
    }
   
    onChangeOwner(e) { 
        this.setState( { owner: e.target.value });
    }

    
    onChangeBlankType(e) { 
        this.setState( { blankType: e.target.value });
    }

    onChangeBlankID(e) { 
        this.setState( { blankID: e.target.value });
    }

    onChangeStatus(e) { 
        this.setState( { status: e.target.value });
    }

    onSubmit(e) {
        //since is a form we have to prevent the form from submitting
        e.preventDefault();

        const newBlank = {
            owner: this.state.owner,
            blankID: this.state.blankID,
            blankType: this.state.blankType,
            status: this.state.status
        };

        //Add item via Additem action
        axios.post('http://localhost:5000/stock/add', newBlank) 
            .then(res => console.log(res.data));

        window.location = '/';

    };


    render() {
        return(
            //form code 
            <div>
                <h3>Blank Addition</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Owner: </label>
                        <select ref="userInput" //dropdown menu /different methods inside brackets
                            required
                            className="form-control"
                            value={this.state.owner}
                            onChange={this.onChangeOwner}>
                                {
                                    this.state.users.map(function(user) { //jaavscript fucntion for users returned form mongo which gives us options
                                        return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>
                                    })
                                }
                            </select>        
                    </div>
                    <div className="form-group">
                        <label>Blank Type: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.blankType}
                            onChange={this.onChangeBlankType}>
                                <option>444</option>
                                <option>440</option>
                                <option>420</option>
                                <option>201</option>
                                <option>101</option>
                                </select>
                    </div>
                    <div className="form-group">
                        <label>Blank ID: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.blankID}
                            onChange={this.onChangeBlankID}
                            />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}>
                                <option>Available</option>
                                <option>Validated</option>
                                <option>Void</option>
                                <option>Lost/Stolen</option>
                                <option>Refunded</option>
                                </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Blank" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}