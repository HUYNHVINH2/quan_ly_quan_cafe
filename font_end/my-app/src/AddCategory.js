import React, { Component } from 'react'

export default class AddCategory extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <form action="/danh-muc/add" method="POST">
                      <h4 className="form-header text-uppercase">
                        <i className="fa fa-user-circle-o" />
                        THÊM DANH MỤC
                </h4>
                      <div className="form-group row">
                        <label htmlFor="input-2" className="col-sm-2 col-form-label">Tên Danh Mục</label>
                        <div className="col-sm-10">
                          <input type="text" name="nameCategory" id="txtThemKhoa" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="input-2" className="col-sm-2 col-form-label">Mã Danh Mục</label>
                        <div className="col-sm-10">
                          <input type="text" name="idCategory" id="txtMaKhoa" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-footer">
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
    







  