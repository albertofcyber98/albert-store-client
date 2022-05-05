import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// combineReducers => untuk menggabungkan beberapa reducers
// createStore => untuk membuat store
// applyMiddleware => untuk menggunakan middleware
// compose => untuk konfigurasi redux toolkit 
import thunk from 'redux-thunk';
import authReducer from './features/Auth/reducer';
import cartReducer from './features/Cart/reducer';
import productReducer from './features/Products/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer
});
// kosong karena belum dibuat reducer
const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;