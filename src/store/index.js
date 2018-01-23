import {createStore} from 'redux'
import rootReducers from '../reducer/index'
// store创建保存数据的容器

const store = createStore(rootReducers);

export {store};