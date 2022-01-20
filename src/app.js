import Header from './components/Header'

import './css/index.css';


const app = () => {
    document.getElementById('header').innerHTML = Header();
}

app();