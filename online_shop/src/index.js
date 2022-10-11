import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'remixicon/fonts/remixicon.css'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)