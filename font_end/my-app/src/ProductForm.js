import React, { Component } from 'react'

export default class ProductForm extends Component {
  render() {
    return (
        <div className="content-wrapper">
        <div className="container-fluid">

        <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <form action="/san-pham/add" method="POST" encType="multipart/form-data">
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
                {/*
                <div class="form-group row">
                  <label for="input-5" class="col-sm-2 col-form-label">Giới tính</label>
                  <div class="col-sm-10">
                    <select class="form-control" required>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                    </div>
                  </div>
                   */}
                <div className="form-group row">
                  <label htmlFor="input-6" className="col-sm-2 col-form-label">Chọn Danh Mục</label>
                  <div className="col-sm-10">
                    <select className="form-control" name="idCategory" id="idCategory" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
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
      </div>
        )
      }
    }
    
