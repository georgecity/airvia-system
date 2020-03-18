import React, { Component } from "react";
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
 } from "reactstrap";
import axios from 'axios';


export default class itemModal extends Component{

    constructor(props) { 
        super(props);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        modal: false,
        creator: "george",
        currency: 0,
        date: new Date()
    };}

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    };

    onChangeCurrency(e){
        this.setState({ currency: e.target.value });

    };

    onSubmit = (e) => {
        //since is a form we have to prevent the form from submitting
        e.preventDefault();

        const newCurrency = {

            creator: this.state.creator,
            currency: this.state.currency,
            date: this.state.date

        };

        //Add item via Additem action
        axios.post('http://localhost:5000/currency/add', newCurrency) 
            .then(res => console.log(res.data));

        //Close modal
        this.toggle();
        window.location = '/';
    };

    render() {
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: "2rem"}}
                onClick={this.toggle}
                >Add Currency</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Enter Today's Currency</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="currency">Currency</Label>
                                <Input
                                type="text"
                                //"name" shoul match the attribute in the state above
                                name="name"
                                id="currency"
                                placeholder="Add Currency"
                                value={this.state.currency}
                                onChange={this.onChangeCurrency}
                                />
                                <Button
                                color="dark"
                                style={{marginTop:"2rem"}}
                                block
                                >Add Currency</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        );
    }

}

