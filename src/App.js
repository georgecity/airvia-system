import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Navbar from "./components/gui/navbar";
import RegisterUser from "./components/register-user.component";
import BlankStock from "./components/blank-stock.component";
import AddBlank from "./components/blank-addition.component";
import AddCurrency from "./components/currency-modal.component";
import UserList from "./components/user-list.component";
import RegisterCustomer from "./components/register-customer.component";
import RecordSale from "./components/record-sale.component";
import RecordPayment from "./components/record-payment.component";
import EditUser from "./components/edit-user.component";
import EditCustomer from "./components/edit-customer.component";
import CustomerList from "./components/customer-list.component";
import AddComission from "./components/comission.addition.component";
import AddDiscount from "./components/discount-addition.component";

import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router> 
                <div className="container">
                    <Navbar />
                    <br/>
                    <Route path="/users/register"  component={RegisterUser} />
                    <Route path="/stock/"  exact component={BlankStock} />
                    <Route path="/stock/add"  component={AddBlank} />
                    <Route path="/currency/add"  component={AddCurrency} />
                    <Route path="/users/"  exact component={UserList} /> 
                    <Route path="/customers/register"  component={RegisterCustomer} />
                    <Route path="/sales/add"  component={RecordSale} />
                    <Route path="/payment/add"  component={RecordPayment} />
                    <Route path="/users/edit/:id"  component={EditUser} />
                    <Route path="/customers/edit/:id"  component={EditCustomer} />
                    <Route path="/customers/"  exact component={CustomerList} />
                    <Route path="/comission/add"  exact component={AddComission} />
                    <Route path="/discounts/add"  exact component={AddDiscount} />
                    
                </div>
                </Router>
            </Provider>
          );
    }
  
    
}

export default App;
