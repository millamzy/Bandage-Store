// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
// import { store } from './Redux/store.jsx';

// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <Provider store={store}> 
//       <App />
//       </Provider>
   
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Redux/Store'; // Ensure this path is correct
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);


export default App;
