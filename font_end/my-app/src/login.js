import React, { Component } from 'react';
import Axios from 'axios';
import Slidebar from './component/sildebar';

import  { Redirect } from 'react-router-dom';
export default class login extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
        isLogin : false
    }
    getValueInput = (event) => {
        let target = event.target;
        let { name, value } = target;

        this.setState({
            [name]: value
        })
    }
     login = (e) => {
        let { username, password } = this.state;
        // this.props.onAdd(txtName, txtAge);
        e.preventDefault(); 
        console.log( { username, password });
        console.log('object');
        Axios.post(`http://localhost:5000/nguoi-dung/login`,{
            username: username,
            password: password
          })
        .then(res => {
            if(res.data.message == 'login_success'){
               this.setState({ isLogin : true });
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        const { isLogin } = this.state;

        if (isLogin) {
        return <Redirect to="/dashboad"/>;
        }
        else{
            return (
                <div>
                    <div className="form-body">
                        <div className="website-logo">
                            <a href="index.html">
                                <div className="logo">
                                    <img className="logo-size" src="images/logo-light.svg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <div className="img-holder">
                                <div className="bg" />
                                <div className="info-holder">
                                </div>
                            </div>
                            <div className="form-holder">
                                <div className="form-content">
                                    <div className="form-items">
                                        <h3>Đăng Nhập vào Hệ Thống Quản Lí Shop Caffe</h3>
                                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                        <div className="page-links">
                                            <a href="/user/dang-nhap" className="active">Login</a><a href="/user/dang-ky">Register</a>
                                        </div>
                                        <form onSubmit={this.login}>
                                            <input className="form-control" type="text" name="username" placeholder="username" required onChange={this.getValueInput} />
                                            <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.getValueInput} required />
                                            <div className="form-button">
                                                <button id="submit"  className="ibtn">Login</button> <a href="forget1.html">Forget password?</a>
                                            </div>
                                        </form>
                                        <div className="other-links">
                                            <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}
