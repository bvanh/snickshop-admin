
import {
  // Thêm 1 action type
  FETCH_PRODUCTS
} from "../action-type/index";

export const fetchProducts = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data
  };

  // return function(dispatch) {
  //   // Trong function này sẽ thực hiện fetch data từ API như bình thường
  //   return fetch("https://data-shoes.herokuapp.com/tatcasanpham")
  //     .then(response => response.json())
  //     .then(data => {
  //       // Sau khi lấy được data từ trên API sẽ dispatch data vừa nhận được vào trong store.
  //       // Hàm dispatch nhận vào tham số là 1 object như 1 action thông thường.
  //       dispatch({
  //         type: FETCH_PRODUCTS,
  //         payload: data
  //       });
  //       console.log(data)
  //     });
  // };
};

// Fetch data từ API.

// Redux thunk fetchProducts
// Action fetchProducts sẽ trả về 1 function nhận vào 1 tham số là dispatch.
// export const fetchProducts = () => {
//   return function(dispatch) {
//     // Trong function này sẽ thực hiện fetch data từ API như bình thường
//     fetch("https://cody-json-server.herokuapp.com/products?_page=1&_limit=10")
//       .then(response => response.json())
//       .then(data => {
//         // Sau khi lấy được data từ trên API sẽ dispatch data vừa nhận được vào trong store.
//         // Hàm dispatch nhận vào tham số là 1 object như 1 action thông thường.
//         dispatch({
//           type: FETCH_PRODUCTS,
//           payload: data
//         });
//       });
//   };
// };

// Redux saga fetchProducts
// export const fetchProducts = () => {
//     // Với redux saga, action chỉ return về plain object như action bình thường
//     return {
//       type: FETCH_PRODUCTS
//     };
//   };
