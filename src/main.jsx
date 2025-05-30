const basename = process.env.NODE_ENV === 'production' ? '/goVibe' : '/';

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './Store/store.jsx';
createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
     <BrowserRouter >
        <App/>
     </BrowserRouter>
    </Provider>
 
)
