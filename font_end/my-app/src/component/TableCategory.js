import React, { Component } from 'react'
import Axios from 'axios';

export default class Table extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    state = {
        todos: [],
        isDelete : 0
      }
    remove = (e)=>{
        let that = this;
        let newdelete = this.state.isDelete + 1;
        console.log(this);
        console.log(e.currentTarget.id);
        let id = e.currentTarget.id;
        Axios.get(`http://localhost:5000/danh-muc/xoa/${id}`)
        .then(res => {
          const result = res;
          console.log(res);
          if(res.data.error == false){
              alert('xoa thanh cong');
              that.setState({ isDelete : newdelete  });
          }
        //  this.setState({ todos: result.data.result.data });
        })
        .catch(error => console.log(error));

    }
    componentDidMount() {
        Axios.get(`http://localhost:5000/danh-muc/danh-sach`)
          .then(res => {
            const result = res;
            console.log(result.data.result.data);
            this.setState({ todos: result.data.result.data });
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
                                                        <th scope="col"> Id  </th>
                                                        <th scope="col"> Id Danh Mục </th>
                                                        <th scope="col">Tên Danh Mục</th>
                                                        <th scope="col">tùy chọn</th>
                                                    </tr>
                                                </thead>
                                                
                                                { todos.map((category)=>{
                                                    return(<tbody>
                                                        <tr>
                                                            <th scope="row">{category._id}</th>
                                                            <td>{category.idCategory}</td>
                                                            <td>{category.nameCategory}</td>
                                                            <td>
                                                                <button >Sửa</button>
                                                                <button id={category._id} onClick = {this.remove} > Xóa</button>
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
