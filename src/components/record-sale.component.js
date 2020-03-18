import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from '../actions/userActions';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


 export default class RecordSale extends Component {

    constructor(props) { 
        super(props);  

        this.onChangeTicketAmount = this.onChangeTicketAmount.bind(this);
        this.onChangeBlankID = this.onChangeBlankID.bind(this);
        this.onChangeCoupons = this.onChangeCoupons.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeMethod = this.onChangeMethod.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        this.onChangeComission = this.onChangeComission.bind(this);
        this.onChangeCustomer = this.onChangeCustomer.bind(this);
        this.onChangeDiscountName = this.onChangeDiscountName.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //state is how u create variables in react
        this.state = { 
            ticketAmount: " ", 
            blankID: " ",
            coupons: [],
            date: new Date(),
            method: " ",
            currency: "",
            comission: "",
            discount: "",
            customer: "",
            payment: "",
            advisor: "ron",
            totalPrice: " ",
            currencies: [],
            comissions: [],
            discounts: [],
            customers: []
        }
    }

    componentDidMount() {  //react life cycle method automatically called right before anything displays the page
        axios.get('http://localhost:5000/currency/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        currencies: response.data.map(currency => currency.currency), //to avoid giving different fields of the user array, map allow us to return data foe every item in the array
                        currency: response.data[0].currency
                    })
                }
            })

            axios.get('http://localhost:5000/comission/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        comissions: response.data.map(comission => comission.comission), //to avoid giving different fields of the user array, map allow us to return data foe every item in the array
                        comission: response.data[0].comission
                    })
                }
            })
        
            axios.get('http://localhost:5000/discounts/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        discounts: response.data.map(discount => discount.discountName), //to avoid giving different fields of the user array, map allow us to return data foe every item in the array
                        discount: response.data[0].discountName
                    })
                }
            })

            axios.get('http://localhost:5000/customers/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        customers: response.data.map(customer => customer.name), //to avoid giving different fields of the user array, map allow us to return data foe every item in the array
                        customer: response.data[0].name
                    })
                }
            })
    }
   
    onChangeTicketAmount(e) { 
        this.setState( { ticketAmount: e.target.value });
    }

    onChangeBlankID(e) { 
        this.setState( { blankID: e.target.value });
    }

    onChangeCoupons(e) { 
        this.setState( { coupons: e.target.value });
    }
    onChangeDate(date) { 
        this.setState( { date: date });
    }

    onChangeMethod(e) { 
        this.setState( { method: e.target.value });
    }

    onChangeCurrency(e) { 
        this.setState( { currency: e.target.value });
    }

    onChangeComission(e) { 
        this.setState( { comission: e.target.value });
    }

    onChangeCustomer(e) { 
        this.setState( { customer: e.target.value });
    }
    onChangeDiscountName(e) { 
        this.setState( { discountName: e.target.value });
    }

    onChangePayment(e) { 
        this.setState( { payment: e.target.value });
    }

    onChangeTotalPrice(e) { 
        this.setState( { totalPrice: e.target.value });
    }

    calculateTotal() {
        const price = {
            ticketAmount: this.state.ticketAmount,
            currency: this.state.currency,
            comission: this.state.comission,
            discount: this.state.discount,

        }
        return
    }

    onSubmit(e) {
        //since is a form we have to prevent the form from submitting
        e.preventDefault();

        const newSale = {
            ticketAmount: this.state.ticketAmount,
            blankID: this.state.blankID,
            coupons: this.state.coupons,
            date: this.state.date,
            method: this.state.method,
            currency: this.state.currency,
            comission: this.state.comission,
            customer: this.state.customer,
            discount: this.state.discount,
            payment: this.state.payment,
            advisor: this.state.advisor,
            totalPrice: this.state.totalPrice
        };

        //Add item via Additem action
        axios.post('http://localhost:5000/sales/add', newSale) 
            .then(res => console.log(res.data));

        window.location = '/';

    };


    render() {
        return(
            //form code 
            <div>
                <h3>Record Sale</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <label>Ticket Amount: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ticketAmount}
                            onChange={this.onChangeTicketAmount}
                            />       
                    </div>
                    <div className="form-group">
                        <label>BlankID: </label> 
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.blankID}
                            onChange={this.onChangeBlankID}
                            />
                    </div>
                    <div className="form-group">
                        <label>Coupons: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.coupons}
                            onChange={this.onChangeCoupons}>
                                <option>1</option>
                                </select>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Method: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.method}
                            onChange={this.onChangeMethod}>
                                <option>Cash</option>
                                <option>Card</option>
                                </select>
                    </div>
                    <div className="form-group"> 
                        <label>Currency: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.currency}
                            onChange={this.onChangeCurrency}>
                                <option>USD</option>
                                <option>GBP</option>
                                </select>
                    </div>
                    <div className="form-group"> 
                        <label>Comission: </label>
                        <select ref="userInput" //dropdown menu /different methods inside brackets
                            required
                            className="form-control"
                            value={this.state.comission}
                            onChange={this.onChangeComission}>
                                {
                                    this.state.comissions.map(function(comission) { //jaavscript fucntion for users returned form mongo which gives us options
                                        return <option
                                        key={comission}
                                        value={comission}>{comission}
                                        </option>
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Customer: </label>
                        <select ref="userInput" //dropdown menu /different methods inside brackets
                            required
                            className="form-control"
                            value={this.state.customer}
                            onChange={this.onChangeCustomer}>
                                {
                                    this.state.customers.map(function(customer) { //jaavscript fucntion for users returned form mongo which gives us options
                                        return <option
                                        key={customer}
                                        value={customer}>{customer}
                                        </option>
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Discount: </label>
                        <select ref="userInput" //dropdown menu /different methods inside brackets
                            required
                            className="form-control"
                            value={this.state.discountName}
                            onChange={this.onChangeDiscountName}>
                                {
                                    this.state.discounts.map(function(discountName) { //jaavscript fucntion for users returned form mongo which gives us options
                                        return <option
                                        key={discountName}
                                        value={discountName}>{discountName}
                                        </option>
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">

                        <label>Payment: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.payment}
                            onChange={this.onChangePayment}>
                                <option>4056-8515-5185-5185</option>
                                </select>
                    </div>
                    <div className="form-group">
                        <label>Total Price: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.totalPrice}
                            onChange={this.onChangeTotalPrice}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}

