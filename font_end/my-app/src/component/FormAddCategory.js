import React, { Component } from 'react'
import Axios from 'axios';

export default class FormAddProduct extends Component {


    state = {
        todos: [],
      }
  
    getValueInput = (event) => {
        let target = event.target;
        let { name, value } = target;

       
        console.log({ name, value });
        this.setState({
            [name]: value
        })
    }
 

      addCategory =(e)=>{
        let { nameCategory, idCategory } = this.state;
        e.preventDefault(); 
        Axios.post(`http://localhost:5000/danh-muc/add`,{
            nameCategory : nameCategory,
            idCategory : idCategory
        })
        .then(res => {
          const result = res;
          console.log(result);
          if(result.data.error == false){
              alert('Thêm danh mục thành công')
          }
        })
        .catch(error => console.log(error));
        }
    


     
    render() {
            return (
                <div className="content-wrapper">
            <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form action=""  onSubmit={this.addCategory} method="POST" encType="multipart/form-data">
                    <h4 className="form-header text-uppercase">
                      <i className="fa fa-user-circle-o" />
                      Thông Tin Danh Mục
                    </h4>
                    <div className="form-group row">
                      <label htmlFor="input-2" className="col-sm-2 col-form-label">Tên Danh Mục</label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.getValueInput}  name="nameCategory" id="txtnameProduct" className="form-control" placeholder="Vd: Caffe Sua" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="input-3" className="col-sm-2 col-form-label" >ID Danh Mục</label>
                      <div className="col-sm-10">
                        <input type="text" id="txtidProduct" onChange={this.getValueInput} name="idCategory" className="form-control" placeholder required />
                      </div>
                    </div>
                 
                    <div className="form-footer">
                      <button className="btn btn-danger"><i className="fa fa-times" />REMOVE</button>
                      <button className="btn btn-success" id="btnLuu" type="submit">
                        <i className="fa fa-check-square-o" /> 
                        Lưu vào CSDL
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
            )
        
    

    }
    
}

