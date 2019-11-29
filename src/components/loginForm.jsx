import React, { Component } from 'react'
import Input from './common/input';

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
        const { account} = this.state
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="username"
                        value={account.username}
                        onChange={this.handleChange}
                        label="Username"
                    />
                    <Input 
                        name="password"
                        value={account.password}
                        onChange={this.handleChange}
                        label="Password"
                    />
                    
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
