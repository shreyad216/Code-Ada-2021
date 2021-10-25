import React, { Component, useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Form extends Component {
    state = {
        count: 0,
        items: [
            {
                "itemName": "Stick",
                "description": "Protect self from animals"
            },
            {
                "itemName": "Toothbrush",
                "description": "Brush Teeth"
            },
            {
                "itemName": "Soap",
                "description": "1: Find Water 2: Clean Self"
            },
            {
                "itemName": "Bark",
                "description": "Start a fire"
            },
            {
                "itemName": "Car",
                "description": "Drive to safety"
            },
            {
                "itemName": "Pine cone",
                "description": "Burn to make a fire"
            },
            {
                "itemName": "Blanket",
                "description": "Keep warm"
            },
            {
                "itemName": "Pillow",
                "description": "Place under your head when you sleep"
            },
            {
                "itemName": "Toilet paper",
                "description": "Use to start a fire"
            },
            {
                "itemName": "Water",
                "description": "Use to clean wounds and drink"
            },
            {
                "itemName": "Food",
                "description": "Eat it"
            },

        ],
        selected: [3],
    }
    onChange = (event) => {
        const isChecked = event.target.checked;
        console.log(event.target.checked)
        if (isChecked) {
            this.state.count = this.state.count + 1;
            this.setState({ selected: [...this.state.selected, event.target.name, event.target.value] });
            console.log(event.target.value);
            let newItem = { itemName: event.target.name };
            let newDescrip = { description: event.target.value };
            this.state.selected.push(newItem, newDescrip);
            console.log(this.state.selected);
        } else {
            this.state.count = this.state.count - 1;
            let index = this.state.selected.indexOf(event.target.value);
            this.state.selected.splice(index, 1);
            this.setState({ selected: this.state.selected });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="form">
                    <form >
                        {
                            this.state.items.map(item => {
                                return (
                                    <label key={item.itemName}>
                                        <input type="checkbox" onChange={this.onChange} name={item.itemName} value={item.description} ></input>
                                        <span>{item.itemName}</span>
                                        <br />
                                        {/* <br /> */}
                                    </label>
                                )
                            })
                        }
                    </form>
                </div>
                <div className="countselected">
                    <p> {this.state.count} of 6 selected</p>
                </div>
                {/* <Link to="/Cards" state={{ selectedItems: this.state.selected }}> */}
                    <a href= "/Cards/">
                    <button className="btn" >
                        Submit
                    </button>
                </a>
                    {/* Submit
                </Link> */}
            </div>

        )
    }
}
export default Form