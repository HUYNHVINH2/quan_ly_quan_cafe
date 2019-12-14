import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './login';


import Axios from 'axios';
import Slidebar from './component/sildebar';

export default class App extends Component {

  state = {
    todos: [],
  }

  componentWillMount() {
    Axios.get(`http://localhost:5000/san-pham/danh-sach`)
      .then(res => {
        const result = res;
        console.log(res);

        this.setState({ todos: result.data });
      })
      .catch(error => console.log(error));
    console.log(this.state.todos);
  }

  render() {
    return (
     <Router>
      <div className="App">
   

        <Switch>
            <Route  path="/dashboad">
              <Slidebar/>
            </Route>
            <Route  path="/login">
              <Login />
            </Route>
        </Switch>
        </div>
      </Router>
    )
  }

  _onAdd = (name, old) => {
    Axios.post('http://localhost:3000/posts', { name, old }).then(({ data }) => {
      this.setState(preState => ({
        todos: [...preState.todos, data]
      }))
    });
  }

  isLoadProduct = ()=>{
    let data = 1; 
    console.log('load page');
    this.setState(preState => ({
      todos: [...preState.todos, data]
    }))
  }
}
