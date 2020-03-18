import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from '../actions/userActions';
import PropTypes from 'prop-types';
import axios from 'axios';


 export default class AddComission extends Component {

    constructor(props) { 
        super(props);  

        this.onChangeComission = this.onChangeComission.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            creator: "George ", 
            comission: " ",         
        }
    }
   
    onChangeComission(e) { 
        this.setState( { comission: e.target.value });
    }

    onSubmit(e) {
        //since is a form we have to prevent the form from submitting
        e.preventDefault();

        const newComision = {
            creator: this.state.creator,
            comission: this.state.comission,
            
        };

        //Add item via Additem action
        axios.post('http://localhost:5000/comission/add', newComision) 
            .then(res => console.log(res.data));

        window.location = '/';

    };

    render() {
        return(
            //form code 
            <div>
                <h3>Add Comission</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Comission: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.comission}
                            onChange={this.onChangeComission}
                            />       
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Comission" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}

