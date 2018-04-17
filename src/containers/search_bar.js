import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }

        //bind the non-fat arrows
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        //clear search after fetch
        this.setState({term: ''});
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input onChange={this.onInputChange}
                placeholder="Get a five-day forecast in your favorite cities"
                value={this.state.term}
                className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

//null for no state
export default connect(null, mapDispatchToProps)(SearchBar);