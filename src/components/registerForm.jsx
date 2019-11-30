import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form';

export default class RegisterForm extends Form {


    state = {
        data: { username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
        name: Joi.string().required().label("Name")
    }

    doSubmit = () => {
        console.log('submitted');
    }    

    
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        )
    }
}
