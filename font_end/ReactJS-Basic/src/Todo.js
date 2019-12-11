import React, { Fragment } from 'react';
export default class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listProduct : [],
            name : '',
            price: ''
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClickButton = (e) => {
        e.preventDefault();
        let { listProduct, name, price } = this.state;
        let productNew = [ ...listProduct, { name, price } ];
        this.setState({
            listProduct: productNew,
            name: "",
            price: ''
        })
    }

    render(){
        let { listProduct, name, price } = this.state;
        return (
            <Fragment>
                <h1>TODO</h1>
                <form>
                    <input type="text" name="name" value={ name }  placeholder = "name" onChange= { e => { this.handleChangeInput(e) }}></input>
                    <input type="text" name="price" value={ price } placeholder="price" onChange= { e => { this.handleChangeInput(e) }}></input>
                    <button onClick={ e => this.handleClickButton(e) }> SEND </button>
                </form>
                <ul>
                    {
                        listProduct.map(product => (
                            <li key={ product }>
                                <span> Name: <strong>{ product.name }</strong> </span> - <span> Price: <strong>{ product.price }</strong> </span>
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
} 