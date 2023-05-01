import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Cutoff from './Cutoff';
import Num from './Num';
import Text from './Text';
// import Login from './Login';
import reportWebVitals from './reportWebVitals';
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div className='gig'>
      <Login />
    </div> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Text />} />
      <Route path='/numeric' element = {<Num />} />
      <Route path='/cutoff' element = {<Cutoff />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
