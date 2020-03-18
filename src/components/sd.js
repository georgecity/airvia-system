import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBlanks, deleteBlank} from '../actions/blankActions';
import PropTypes from 'prop-types';

const Blank = props => ( //functional react component, no state or lifecycle methods
    <tr>
        <td>{props.blank.advisor}</td>
        <td>{props.blank.officeManager}</td>
        <td>{props.blank.admin}</td>
        <td>{props.blank.blankType}</td>
        <td>{props.blank.status}</td>
        <td>
            <Link to={"/edit/"+props.blank._id}>edit</Link> | <a href="#" onClick={() => {props.deleteBlank(props.blank._id)}}>delete</a>
        </td>
    </tr>
)

class BlankStock extends Component {

    constructor(props){
        super(props);

        this.deleteBlank = this.deleteBlank.bind(this);
        this.state = {blanks: [] };
    }

    componentDidMount() {
        this.props.getBlanks();
    }

    deleteBlank(id){
        this.props.deleteBlank(id);
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
                            <th>Advisor</th>
                            <th>Office Manager</th>
                            <th>admin</th>
                            <th>BlankType</th>
                            <th>Status</th>
                            <th>Actions</th>
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
//change nopw
BlankStock.propTypes = {
    getBlanks: PropTypes.func.isRequired,
    blank: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    blank: state.blank

});
export default connect(
    mapStateToProps, 
    {getBlanks, deleteBlank}
    )(BlankStock);