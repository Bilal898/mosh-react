import React, { Component } from 'react'

export default class LoginForm extends Component {


    state = {
        account: { username: '', password: ''}
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log('submitted');
        const username = this.username.current.value
        
    }

    handleChange = e => {
        const account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({ account })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input autoFocus 
                    name="username"
                    value={this.state.account.username}
                    onChange={this.handleChange}
                    type="text" id="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input autoFocus
                    name="password"
                    value={this.state.account.password}
                    onChange={this.handleChange}
                     type="text" id="password" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
