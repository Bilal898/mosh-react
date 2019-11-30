import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form';

export default class NewMovieForm extends Form {


    state = {
        data: { title: '', genre: '', numberInStock:'', rentalRate:''},
        errors: {}
    }

    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().integer().min(0).required().label("Number In Stock"),
        rentalRate: Joi.number().min(0).max(10).required().label("Rental Rate")
    }

    doSubmit = () => {
        console.log('new movie submit', this.state.data);
    }    

    
    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genre', 'Genre')}
                    {this.renderInput('numberInStock', 'Number In Stock')}
                    {this.renderInput('rentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
        )
    }
}
