import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer = props => ( //functional react component, no state or lifecycle methods
    <tr>
        <td>{props.customer.name}</td>
        <td>{props.customer.address}</td>
        <td>{props.customer.email}</td>
        <td>{props.customer.contactNumber}</td>
        <td>{props.customer.discounts}</td>
        <td>{props.customer.payments}</td>
        <td>{props.customer.customerStatus}</td>
        <td>
            <Link to={"edit/"+props.customer._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteCustomer(props.customer._id)}}>Delete</a>
        </td>
    </tr>
)

export default class CustomerList extends Component {

    constructor(props){
        super(props);

        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.state = {customers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/customers/')
            .then(response => {
                this.setState({customers: response.data}) //return all the fields of exercises
            })
            .catch((error) => {
                console.log("Error: " + error)
            })
    }

    deleteCustomer(id){
        axios.delete('http://localhost:5000/customers/'+id)
            .then(res => console.log(res.data)); //this says exercise deleted from routes

        this.setState({
            customers: this.state.customers.filter(el => el._id !== id)
        })
    }

    customerList() {
        return this.state.customers.map(currentcustomer => {
            console.log(currentcustomer);

            return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
        })
    }
 
    render() {

        return(
            <div>
                <h3>Customers</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Discounts</th>
                            <th>Payments</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.customerList() } 
                    </tbody>
                </table>
            </div>
        )
    }

}
