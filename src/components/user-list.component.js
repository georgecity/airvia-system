import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const User = props => ( //functional react component, no state or lifecycle methods
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.address}</td>
        <td>{props.user.email}</td>
        <td>{props.user.password}</td>
        <td>{props.user.role}</td>
        <td>
            <Link to={"edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => {props.deleteUser(props.user._id)}}>delete</a>
        </td>
    </tr>
)

export default class UserList extends Component {

    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.state = {users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({users: response.data}) //return all the fields of exercises
            })
            .catch((error) => {
                console.log("Error: " + error)
            })
    }

    deleteUser(id){
        axios.delete('http://localhost:5000/users/'+id)
            .then(res => console.log(res.data)); //this says exercise deleted from routes

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    userList() {
        return this.state.users.map(currentuser => {
            console.log(currentuser);

            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
    }
 
    render() {

        return(
            <div>
                <h3>Users</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>address</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() } 
                    </tbody>
                </table>
            </div>
        )
    }

}
