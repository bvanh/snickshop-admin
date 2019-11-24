// Import applyMiddleware từ redux
import { createStore, applyMiddleware } from "redux";
import Reducer from "../reduders/index";

// Ở đây sẽ không dùng redux-thunk nữa
import thunk from "redux-thunk";
const store = createStore(Reducer, applyMiddleware(thunk));

export default store;

// // Import createSagaMiddleware từ redux-saga
// import createSagaMiddleware from "redux-saga";
// // Import watcherSaga từ ../sagas/product-saga (tên tuỳ chọn)
// import demoSaga from "../saga/index";

// Khởi tạo sagaMiddleware = method createSagaMiddleware vừa import ở trên
// const initialSagaMiddleware = createSagaMiddleware();

// // const store = createStore(productReducer, applyMiddleware(thunk));

// // Thay applyMiddleware(thunk) bằng applyMiddleware(initialSagaMiddleware)
// const store = createStore(
//   Reducer,
//   applyMiddleware(initialSagaMiddleware)
// );

// initialSagaMiddleware.run(demoSaga);

// export default store;
