import {Provider} from 'react-redux';
import './styles/index.scss';

import App from "./components/app/App";
import store from './store';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);