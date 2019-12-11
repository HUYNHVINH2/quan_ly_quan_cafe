
import React from 'react';
import Axios from 'axios';
import Table from './Table';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





export default class sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        alert : '',
        txtName: '',
        txtAge: ''
    }

   getValueInput = (event)=>{
       let target = event.target;
       let { name, value } = target;
       
       this.setState({
        [name] : value
       })
    }
    componentWillMount() {
      
      Axios.get(`http://localhost:5000/san-pham/danh-sach`)
        .then(res => {
          const result = res;
          console.log(res);
          this.setState({ todos: result.data });
        })
        .catch(error => console.log(error));
    
        Axios.get(`http://localhost:5000/danh-muc/danh-sach`)
        .then(res => {
          const result = res;
          console.log(res);
          this.setState({ listCategorys: result.data });
        })
        .catch(error => console.log(error));
    }
  
    addStudent =()=>{
        let { txtName, txtAge } = this.state;
        this.props.onAdd(txtName, txtAge);
    }
    render(){
      return(
     <div>
         <div id="sidebar-wrapper" className="bg-theme bg-theme9" data-simplebar data-simplebar-auto-hide="true">
        <div className="brand-logo">
          <a href="index.html">
            <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
            <h5 className="logo-text">Dashtreme Admin</h5>
          </a>
        </div>
        <div className="user-details">
          <div className="media align-items-center user-pointer collapsed" data-toggle="collapse" data-target="#user-dropdown">
            <div className="avatar"><img className="mr-3 side-user-img" src="assets/images/avatars/avatar-13.png" alt="user avatar" /></div>
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
              <li><Link to="/danh-sach-san-pham"><i className="zmdi zmdi-long-arrow-right" />Danh sách sản phẩm </Link></li>
              <li><a href="index2.html"><i className="zmdi zmdi-long-arrow-right" /> Property Listings</a></li>
              <li><a href="dashboard-service-support.html"><i className="zmdi zmdi-long-arrow-right" /> Services &amp; Support</a></li>
              <li><a href="dashboard-logistics.html"><i className="zmdi zmdi-long-arrow-right" /> Logistics</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-view-dashboard" /> <span>Quản lý Danh Mục</span><i className="fa fa-angle-left pull-right" />
            </a>
            <ul className="sidebar-submenu">
            
              <li><Link to="/danh-sach-danh-muc"><i className="zmdi zmdi-long-arrow-right" />Danh sách danh mục</Link></li>
              <li><a href="index2.html"><i className="zmdi zmdi-long-arrow-right" /> Property Listings</a></li>
              <li><a href="dashboard-service-support.html"><i className="zmdi zmdi-long-arrow-right" /> Services &amp; Support</a></li>
              <li><a href="dashboard-logistics.html"><i className="zmdi zmdi-long-arrow-right" /> Logistics</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-layers" />
              <span>UI Elements</span> <i className="fa fa-angle-left pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="ui-typography.html"><i className="zmdi zmdi-long-arrow-right" /> Typography</a></li>
              <li><a href="ui-cards.html"><i className="zmdi zmdi-long-arrow-right" /> Cards</a></li>
              <li><a href="ui-buttons.html"><i className="zmdi zmdi-long-arrow-right" /> Buttons</a></li>
              <li><a href="ui-nav-tabs.html"><i className="zmdi zmdi-long-arrow-right" /> Nav Tabs</a></li>
              <li><a href="ui-accordions.html"><i className="zmdi zmdi-long-arrow-right" /> Accordions</a></li>
              <li><a href="ui-modals.html"><i className="zmdi zmdi-long-arrow-right" /> Modals</a></li>
              <li><a href="ui-list-groups.html"><i className="zmdi zmdi-long-arrow-right" /> List Groups</a></li>
              <li><a href="ui-bootstrap-elements.html"><i className="zmdi zmdi-long-arrow-right" /> BS Elements</a></li>
              <li><a href="ui-pagination.html"><i className="zmdi zmdi-long-arrow-right" /> Pagination</a></li>
              <li><a href="ui-alerts.html"><i className="zmdi zmdi-long-arrow-right" /> Alerts</a></li>
              <li><a href="ui-progressbars.html"><i className="zmdi zmdi-long-arrow-right" /> Progress Bars</a></li>
              <li><a href="ui-checkbox-radio.html"><i className="zmdi zmdi-long-arrow-right" /> Checkboxes &amp; Radios</a></li>
              <li><a href="ui-notification.html"><i className="zmdi zmdi-long-arrow-right" /> Notifications</a></li>
              <li><a href="ui-sweet-alert.html"><i className="zmdi zmdi-long-arrow-right" /> Sweet Alerts</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-card-travel" />
              <span>Components</span>
              <i className="fa fa-angle-left pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="components-range-slider.html"><i className="zmdi zmdi-long-arrow-right" /> Range Sliders</a></li>
              <li><a href="components-image-carousel.html"><i className="zmdi zmdi-long-arrow-right" /> Image Carousels</a></li>
              <li><a href="components-grid-layouts.html"><i className="zmdi zmdi-long-arrow-right" /> Grid Layouts</a></li>
              <li><a href="components-switcher-buttons.html"><i className="zmdi zmdi-long-arrow-right" /> Switcher Buttons</a></li>
              <li><a href="components-pricing-table.html"><i className="zmdi zmdi-long-arrow-right" /> Pricing Tables</a></li>
              <li><a href="components-vertical-timeline.html"><i className="zmdi zmdi-long-arrow-right" /> Vertical Timeline</a></li>
              <li><a href="components-horizontal-timeline.html"><i className="zmdi zmdi-long-arrow-right" /> Horizontal Timeline</a></li>
              <li><a href="components-fancy-lightbox.html"><i className="zmdi zmdi-long-arrow-right" /> Fancy Lightbox</a></li>
              <li><a href="components-color-palette.html"><i className="zmdi zmdi-long-arrow-right" /> Color Palette</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-chart" /> <span>Charts</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="charts-chartjs.html"><i className="zmdi zmdi-long-arrow-right" /> Chart JS</a></li>
              <li><a href="charts-morris.html"><i className="zmdi zmdi-long-arrow-right" /> Morris Charts</a></li>
              <li><a href="charts-sparkline.html"><i className="zmdi zmdi-long-arrow-right" /> Sparkline Charts</a></li>
              <li><a href="charts-peity.html"><i className="zmdi zmdi-long-arrow-right" /> Peity Charts</a></li>
              <li><a href="charts-other.html"><i className="zmdi zmdi-long-arrow-right" /> Other Charts</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-invert-colors" /> <span>UI Icons</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="icons-font-awesome.html"><i className="zmdi zmdi-long-arrow-right" /> Font Awesome</a></li>
              <li><a href="icons-material-designs.html"><i className="zmdi zmdi-long-arrow-right" /> Material Design</a></li>
              <li><a href="icons-themify.html"><i className="zmdi zmdi-long-arrow-right" /> Themify Icons</a></li>
              <li><a href="icons-simple-line-icons.html"><i className="zmdi zmdi-long-arrow-right" /> Line Icons</a></li>
              <li><a href="icons-flags.html"><i className="zmdi zmdi-long-arrow-right" /> Flag Icons</a></li>
            </ul>
          </li>
          <li>
            <a href="calendar.html" className="waves-effect">
              <i className="zmdi zmdi-calendar-check" /> <span>Calendar</span>
              <small className="badge float-right badge-light">New</small>
            </a>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-email" />
              <span>Mailbox</span>
              <small className="badge float-right badge-warning">12</small>
            </a>
            <ul className="sidebar-submenu">
              <li><a href="mail-inbox.html"><i className="zmdi zmdi-long-arrow-right" /> Inbox</a></li>
              <li><a href="mail-compose.html"><i className="zmdi zmdi-long-arrow-right" /> Compose</a></li>
              <li><a href="mail-read.html"><i className="zmdi zmdi-long-arrow-right" /> Read Mail</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-format-list-bulleted" /> <span>Forms</span>
              <i className="fa fa-angle-left pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="form-inputs.html"><i className="zmdi zmdi-long-arrow-right" /> Basic Inputs</a></li>
              <li><a href="form-input-group.html"><i className="zmdi zmdi-long-arrow-right" /> Input Groups</a></li>
              <li><a href="form-layouts.html"><i className="zmdi zmdi-long-arrow-right" /> Form Layouts</a></li>
              <li><a href="form-advanced.html"><i className="zmdi zmdi-long-arrow-right" /> Form Advanced</a></li>
              <li><a href="form-uploads.html"><i className="zmdi zmdi-long-arrow-right" /> Form Uploads</a></li>
              <li><a href="form-validation.html"><i className="zmdi zmdi-long-arrow-right" /> Form Validation</a></li>
              <li><a href="form-step-wizard.html"><i className="zmdi zmdi-long-arrow-right" /> Form Wizard</a></li>
              <li><a href="form-text-editor.html"><i className="zmdi zmdi-long-arrow-right" /> Form Editor</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-lock" /> <span>Authentication</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="authentication-signin.html"><i className="zmdi zmdi-long-arrow-right" /> SignIn 1</a></li>
              <li><a href="authentication-signup.html"><i className="zmdi zmdi-long-arrow-right" /> SignUp 1</a></li>
              <li><a href="authentication-signin2.html"><i className="zmdi zmdi-long-arrow-right" /> SignIn 2</a></li>
              <li><a href="authentication-signup2.html"><i className="zmdi zmdi-long-arrow-right" /> SignUp 2</a></li>
              <li><a href="authentication-lock-screen.html"><i className="zmdi zmdi-long-arrow-right" /> Lock Screen</a></li>
              <li><a href="authentication-reset-password.html"><i className="zmdi zmdi-long-arrow-right" /> Reset Password 1</a></li>
              <li><a href="authentication-reset-password2.html"><i className="zmdi zmdi-long-arrow-right" /> Reset Password 2</a></li>
            </ul>
          </li>
          <li>
            <a href="widgets.html" className="waves-effect">
              <i className="zmdi zmdi-widgets" /> <span>Widgets</span>
              <small className="badge float-right badge-danger">10</small>
            </a>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-grid" /> <span>Tables</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="table-simple-tables.html"><i className="zmdi zmdi-long-arrow-right" /> Simple Tables</a></li>
              <li><a href="table-data-tables.html"><i className="zmdi zmdi-long-arrow-right" /> Data Tables</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-map" /> <span>Maps</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="maps-google.html"><i className="zmdi zmdi-long-arrow-right" /> Google Maps</a></li>
              <li><a href="maps-vector.html"><i className="zmdi zmdi-long-arrow-right" /> Vector Maps</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="zmdi zmdi-collection-folder-image" /> <span>Sample Pages</span>
              <i className="fa fa-angle-left float-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="pages-invoice.html"><i className="zmdi zmdi-long-arrow-right" /> Invoice</a></li>
              <li><a href="pages-user-profile.html"><i className="zmdi zmdi-long-arrow-right" /> User Profile</a></li>
              <li><a href="pages-blank-page.html"><i className="zmdi zmdi-long-arrow-right" /> Blank Page</a></li>
              <li><a href="pages-coming-soon.html"><i className="zmdi zmdi-long-arrow-right" /> Coming Soon</a></li>
              <li><a href="pages-403.html"><i className="zmdi zmdi-long-arrow-right" /> 403 Error</a></li>
              <li><a href="pages-404.html"><i className="zmdi zmdi-long-arrow-right" /> 404 Error</a></li>
              <li><a href="pages-500.html"><i className="zmdi zmdi-long-arrow-right" /> 500 Error</a></li>
            </ul>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <i className="fa fa-share" /> <span>Multilevel</span>
              <i className="fa fa-angle-left pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li><a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level One</a></li>
              <li>
                <a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level One <i className="fa fa-angle-left pull-right" /></a>
                <ul className="sidebar-submenu">
                  <li><a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level Two</a></li>
                  <li>
                    <a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level Two <i className="fa fa-angle-left pull-right" /></a>
                    <ul className="sidebar-submenu">
                      <li><a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level Three</a></li>
                      <li><a href="javaScript:void();"><i className="zmdi zmdi-long-arrow-right" /> Level Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-long-arrow-right" /> Level One</a></li>
            </ul>
          </li>
          <li className="sidebar-header">LABELS</li>
          <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-coffee text-danger" /> <span>Important</span></a></li>
          <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-chart-donut text-success" /> <span>Warning</span></a></li>
          <li><a href="javaScript:void();" className="waves-effect"><i className="zmdi zmdi-share text-info" /> <span>Information</span></a></li>
        </ul>
        
      </div>

      <Switch>
          <Route  path="/danh-sach-san-pham">
            <h1>đá</h1>
          
          </Route>
        
      </Switch>
 </div>
     )
    }
          
               
}