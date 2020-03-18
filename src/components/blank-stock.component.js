import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Blank = props => ( //functional react component, no state or lifecycle methods
    <tr>
        <td>{props.blank.owner}</td>
        <td>{props.blank.blankType}</td>
        <td>{props.blank.blankID}</td>
        <td>{props.blank.status}</td>
        <td>
            <Link to={"/edit/"+props.blank._id}>edit</Link> | <a href="#" onClick={() => {props.deleteBlank(props.blank._id)}}>delete</a>
        </td>
    </tr>
)

export default class BlankStock extends Component {

    constructor(props){
        super(props);

        this.deleteBlank = this.deleteBlank.bind(this);
        this.state = {blanks: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/stock/')
            .then(response => {
                this.setState({blanks: response.data}) //return all the fields of exercises
            })
            .catch((error) => {
                console.log("Error: " + error)
            })
    }

    deleteBlank(id){
        axios.delete('http://localhost:5000/stock/'+id)
            .then(res => console.log(res.data)); //this says exercise deleted from routes

        this.setState({
            blanks: this.state.blanks.filter(el => el._id !== id)
        })
    }

    blankList() {
        return this.state.blanks.map(currentblank => {
            console.log(currentblank);

            return <Blank blank={currentblank} deleteBlank={this.deleteBlank} key={currentblank._id}/>;
        })
    }
 
    render() {

        return(
            <div>
                <h3>Blank Stock</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Owner</th>
                            <th>BlankType</th>
                            <th>Blank ID</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.blankList() } 
                    </tbody>
                </table>
            </div>
        )
    }

}
