import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'remixicon/fonts/remixicon.css'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)