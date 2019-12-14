
import React from 'react';
import Axios from 'axios';
import TableProduct from './TableProduct';
import TableCategory from './TableCategory';
import FormAddProduct from './FormAddProduct';
import FormAddCategory from './FormAddCategory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





export default class sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    alert: '',
    txtName: '',
    txtAge: ''
  }

  getValueInput = (event) => {
    let target = event.target;
    let { name, value } = target;

    this.setState({
      [name]: value
    })
  }
  componentWillMount() {

  
  }

  addStudent = () => {
    let { txtName, txtAge } = this.state;
    this.props.onAdd(txtName, txtAge);
  }
  render() {
    return (
      <div>
        <div id="sidebar-wrapper" className="bg-theme bg-theme9" data-simplebar data-simplebar-auto-hide="true">
          <div className="brand-logo">
            <a href="index.html">
              <img src="/assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
              <h5 className="logo-text">Dashtreme Admin</h5>
            </a>
          </div>
          <div className="user-details">
            <div className="media align-items-center user-pointer collapsed" data-toggle="collapse" data-target="#user-dropdown">
              <div className="avatar"><img className="mr-3 side-user-img" src="/assets/images/avatars/avatar-13.png" alt="user avatar" /></div>
              <div className="media-body">
                <h6 className="side-user-name">Mark Jhonsan</h6>
              </div>
            </div>
            <div id="user-dropdown" className="collapse">
              <ul className="user-setting-menu">
                <li><a href="javaScript:void();"><i className="icon-user" />  My Profile</a></li>
                <li><a href="javaScript:void();"><i className="icon-settings" /> Setting</a></li>
                <li><a href="javaScript:void();"><i className="icon-power" /> Logout</a></li>
              </ul>
            </div>
          </div>
          <ul className="sidebar-menu do-nicescrol">
            <li className="sidebar-header">MAIN NAVIGATION</li>
            <li>
              <a href="javaScript:void();" className="waves-effect">
                <i className="zmdi zmdi-view-dashboard" /> <span>Quản lý sản phẩm</span><i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="sidebar-submenu">
                <li><Link to="/dashboad/danh-sach-san-pham"><i className="zmdi zmdi-long-arrow-right" />Danh sách sản phẩm </Link></li>
                <li><Link to="/dashboad/them-san-pham"><i className="zmdi zmdi-long-arrow-right" /> Thêm sản phẩm </Link></li>
              </ul>
            </li>
            <li>
              <a href="javaScript:void();" className="waves-effect">
                <i className="zmdi zmdi-view-dashboard" /> <span>Quản lý Danh Mục</span><i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="sidebar-submenu">
             
                <li><Link to="/dashboad/danh-sach-danh muc"><i className="zmdi zmdi-long-arrow-right" />Danh sách danh mục</Link></li>
                <li><Link to="/dashboad/them-danh-muc"><i className="zmdi zmdi-long-arrow-right" /> Thêm Danh Mục</Link></li>
                
              </ul>
            </li>
           
          </ul>
        </div>
        <Switch>
          <Route path="/dashboad/danh-sach-san-pham">
            <TableProduct  />
          </Route>
          <Route path="/dashboad/danh-sach-danh muc">
            <TableCategory  />
          </Route>
          <Route path="/dashboad/them-san-pham">
            <FormAddProduct  />
          </Route>
          <Route path="/dashboad/them-danh-muc">
            <FormAddCategory  />
          </Route>
        </Switch>
      </div>
    )
  }


}