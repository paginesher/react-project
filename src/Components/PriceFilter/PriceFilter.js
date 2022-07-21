import React, { Component } from 'react';
import '../../Components/PriceFilter/PriceFilter.css'


export default class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            high: 250,
            low: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (event.target.name === "price-low") {
            this.setState({
                high: this.state.high,
                low: event.target.value
            })
        }
        else if (event.target.name === "price-high") {
            this.setState({
                high: event.target.value,
                low: this.state.low
            })
        }
        // fire prop onFilter
        this.props.onFilter(this.state.high, this.state.low);
    }
    render() {
        return (
            <div>
                <h4>Price</h4>
                <label htmlFor="price-low">$Min</label>
                <input id="price-low" type="text" name="price-low" value={this.state.low} onChange={this.handleChange} />
                <span>To </span>
                <label htmlFor="price-high">$High</label>
                <input id="price-high" type="text" name="price-high" value={this.state.high} onChange={this.handleChange} />
            </div>
        )
    }
};