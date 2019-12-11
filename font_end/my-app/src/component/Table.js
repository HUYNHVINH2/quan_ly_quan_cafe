import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        const { todos } = this.props

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
                                            
                                            { todos.map((product)=>{
                                                return(   <tbody>
                                                    <tr>
                                                        <th scope="row">{product.idProduct}</th>
                                                        <td>{product.nameProduct}</td>
                                                        <td>{product.idCategory}</td>
                                                        <td>{product.price}</td>
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
}
