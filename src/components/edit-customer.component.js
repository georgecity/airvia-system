import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
export default class EditExercise extends Component {

    constructor(props) { 
        super(props);  

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        //this.onChangeDiscounts = this.onChangeDiscounts.bind(this);
        //this.onChangePayments = this.onChangePayments.bind(this);
        //this.onChangeCustomerStatus = this.onChangeCustomerStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            name: " ", 
            address: " ",
            email: " ",
            contactNumber: 0,
            //discounts,
           // payments,
           // customerStatus,
            customers: [] 
        }
    }

    componentDidMount() {  
        axios.get("http://localhost:5000/customers/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    email: response.data.email,
                    contactNumber: response.data.contactNumber,
                   // discounts: response.data.discounts,
                   // payments: response.data.payments,
                   // customerStatus: response.data.customerStatus
                    
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

    onChangeEmail(e) {           
        this.setState({
            email: e.target.email
        });
    }

    onChangeContactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

   /* onChangeDiscounts(e) {           
        this.setState({
            discounts: e.target.discounts
        });
    }

    onChangePayments(e) {           
        this.setState({
            payments: e.target.payments
        });
    }
    onChangeCustomerStatus(e) {           
        this.setState({
            customerStatus: e.target.customerStatus
        });
    }
**/
    onSubmit(e) { 
        e.preventDefault(); 
        
        const customer = {            
            name: this.state.name, 
            address: this.state.address,
            email: this.state.email,
            contactNumber: this.state.contactNumber,
            //discounts: this.state.discounts,
           // payments: this.state.payments,
           // customerStatus: this.state.customerStatus
        }

        console.log(customer); 

        axios.post('http://localhost:5000/customers/update/'+this.props.match.params.id, customer) 
            .then(res => console.log(res.data));

        window.location = '/'; 
    }

    render() {
        return(
            <div>
                <h3>Edit Customer Details</h3>
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
                        <label>Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.onChangeContactNumber}
                            onChange={this.onChangeContactNumber}
                            />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Edit Customer Details" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}