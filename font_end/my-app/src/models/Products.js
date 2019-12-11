import Axios from 'axios';
class Products  {
    getALLProducts(){
        Axios.get(`http://localhost:5000/san-pham/danh-sach`)
        .then(res => {
          const result = res;
          console.log(res);
    
          this.setState({ todos: result.data });
        })
        .catch(error => console.log(error));
    };

    addProduct(){

    };

    updateProduct(){

    };

    deleteProduct(){

    };

}
 module.exports= Products;