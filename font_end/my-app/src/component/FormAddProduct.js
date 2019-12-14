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
    componentDidMount() {
        Axios.get(`http://localhost:5000/danh-muc/danh-sach`)
          .then(res => {
            const result = res;
            console.log(result.data.result.data);
            this.setState({ todos: result.data.result.data });
          })
          .catch(error => console.log(error));
    
      }

      addProduct =(e)=>{
        let { nameProduct, idProduct, idCategory, price } = this.state;
        e.preventDefault(); 
        let image = document.getElementById('uploadAvatar');
        var myFormData = new FormData();
        myFormData.append('avatar', image.files[0]);
        myFormData.append('nameProduct', nameProduct);
        myFormData.append('idProduct',idProduct);
        myFormData.append('idCategory', idCategory);
        myFormData.append('price', price);
        Axios.post(`http://localhost:5000/san-pham/add`, myFormData)
        .then(res => {
          const result = res;
          console.log(result);
          if(result.data.error == false){
            alert('Thêm danh mục thành công');
            }
        })
        .catch(error => console.log(error));
        }
       
    render() {
        const { todos } =this.state
        if( this.state.todos.length >0){
            return (
                <div className="content-wrapper">
            <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form action=""  onSubmit={this.addProduct} method="POST" encType="multipart/form-data">
                    <h4 className="form-header text-uppercase">
                      <i className="fa fa-user-circle-o" />
                      Thông Tin Sản Phẩm
                    </h4>
                    <div className="form-group row">
                      <label htmlFor="input-2" className="col-sm-2 col-form-label">Tên Sản Phẩm</label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.getValueInput}  name="nameProduct" id="txtnameProduct" className="form-control" placeholder="Vd: Caffe Sua" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="input-3" className="col-sm-2 col-form-label" >ID Sản Phẩm</label>
                      <div className="col-sm-10">
                        <input type="text" id="txtidProduct" onChange={this.getValueInput} name="idProduct" className="form-control" placeholder required />
                      </div>
                    </div>
                    <h4 className="form-header">
                      <i className="fa fa-file-text-o" />
                      YÊU CẦU
                    </h4>
                  
                    <div className="form-group row">
                      <label htmlFor="input-6" className="col-sm-2 col-form-label">Chọn Danh Mục</label>
                      <div className="col-sm-10">
                        <select className="form-control" name="idCategory" id="idCategory" onChange={this.getValueInput} required>
                        { todos.map((category)=>{
                            return(<option>{category.nameCategory}</option>);
                            })}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="input-2" className="col-sm-2 col-form-label">Đơn giá</label>
                      <div className="col-sm-10">
                        <input type="text" onChange={this.getValueInput} name="price" id="txtprice" className="form-control input-price" placeholder="20.000 VNĐ" required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="input-6" className="col-sm-2 col-form-label">Upload Avatar</label>
                      <input type="file" name="avatar" id="uploadAvatar" onChange={this.getValueInput} />
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
        return (
            <div className="content-wrapper">
        <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <form action="" method="POST" encType="multipart/form-data">
                <h4 className="form-header text-uppercase">
                  <i className="fa fa-user-circle-o" />
                  Thông Tin Sản Phẩm
                </h4>
                <div className="form-group row">
                  <label htmlFor="input-2" className="col-sm-2 col-form-label">Tên Sản Phẩm</label>
                  <div className="col-sm-10">
                    <input type="text" name="nameProduct" id="txtnameProduct" className="form-control" placeholder="Vd: Caffe Sua" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="input-3" className="col-sm-2 col-form-label">ID Sản Phẩm</label>
                  <div className="col-sm-10">
                    <input type="text" id="txtidProduct" name="idProduct" className="form-control" placeholder required />
                  </div>
                </div>
                <h4 className="form-header">
                  <i className="fa fa-file-text-o" />
                  YÊU CẦU
                </h4>
              
                <div className="form-group row">
                  <label htmlFor="input-6" className="col-sm-2 col-form-label">Chọn Danh Mục</label>
                  <div className="col-sm-10">
                    <select className="form-control" name="idCategory" id="idCategory" required>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="input-2" className="col-sm-2 col-form-label">Đơn giá</label>
                  <div className="col-sm-10">
                    <input type="text" name="price" id="txtprice" className="form-control input-price" placeholder="20.000 VNĐ" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="input-6" className="col-sm-2 col-form-label">Upload Avatar</label>
                  <input type="file" name="avatar" id="uploadAvatar" />
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

