import React, { Component } from 'react'
import Axios from 'axios';
import FormEditProduct from '../component/FormEditProduct';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Table extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    state = {
        todos: [],
        isDelete :[]
      }

     
    removeProduct(e){
        let that = this;
          let id = e.currentTarget.id;
          Axios.get(`http://localhost:5000/san-pham/xoa/${id}`)
          .then(res => {
            const result = res;
            console.log(res);
            
        
            if(res.data.error == false){
                that.setState({ isDelete : result });
                alert('xoa thanh cong');
           

            }})
            .catch(error => console.log(error));
      }
    componentDidMount() {

        Axios.get(`http://localhost:5000/san-pham/danh-sach`)
          .then(res => {
            const result = res;
            console.log(res);
            this.setState({ todos: result.data });
          })
          .catch(error => console.log(error));
    
      }
    render() {
        const { todos } = this.state
        if( this.state.todos.length >0){
            return (
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Basic Table</h5>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"> Id </th>
                                                        <th scope="col"> Id Danh mục</th>
                                                        <th scope="col">Tên sản phẩm</th>
                                                        <th scope="col">giá</th>
                                                        <th scope="col">tùy chọn</th>
                                                    </tr>
                                                </thead>
                                                
                                                { todos.map((product)=>{
                                                    return(   <tbody>
                                                        <tr>
                                                            <th scope="row">{product._id}</th>
                                                            <th scope="row">{product.idProduct}</th>
                                                            <td>{product.nameProduct}</td>
                                                            <td>{product.price}</td>
                                                            <td>
                                                                <button ><Link to='/dashboad/danh-sach-san-pham/chinh-sua'>Sửa</Link></button>
                                                                <button id = {product._id} onClick = {this.removeProduct}>Xóa</button>
                                                                </td>
                                                        </tr>
                                                    </tbody>)                
                                                })}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                    <Route path="/dashboad/danh-sach-san-pham/chinh-sua">
                        <FormEditProduct></FormEditProduct>
                    </Route>
                    
                    </Switch>
                </div>
            )
        }
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic Table</h5>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Id</th>
                                                    <th scope="col">Category Id</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">price</th>
                                                </tr>
                                            </thead>
                                            
                                        </table>
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
