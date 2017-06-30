import {fetchProductList} from './actions';
import configureStore from './store/configureStore';

let store = configureStore();

let payload = {
    page  : 1,
    filter: 'test'
};

// 发起一个 action
store.dispatch(fetchProductList(payload)).then(() =>
    console.log(store.getState())
);
