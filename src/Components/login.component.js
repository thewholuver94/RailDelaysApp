import React, { Component } from 'react';
import { history } from '../routing.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
const axios = require('axios').default;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "nlerner",
            password: "password"
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // partial state is automatically merged with existing state
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
        axios({
            method: 'post',
            url: 'https://localhost:5001/api/Authenticate/login',
            headers: {}, 
            data: {
                username: this.state.userName,
                password: this.state.password
            }
        })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h3>Login</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input 
                        type="text" 
                        name="userName"
                        className="form-control" 
                        placeholder={this.state.userName} 
                        onChange={this.handleChange} 
                        required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder={this.state.password} 
                        onChange={this.handleChange} 
                        required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block">
                    Submit
                </button>
                <p className="forgot-password text-right">
                    Forgot password?
                </p>
            </form>
        );
    }
}