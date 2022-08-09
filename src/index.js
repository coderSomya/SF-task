import {React} from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Sports } from './Sports';
import { IITJee } from './IITJee';
import {Science} from './Science';
import {GeneralKnowledge } from './GeneralKnowledge'
import { Sidebar } from './Sidebar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
 <Route path="/" element= {<>

 <Sidebar/>

 <App/>
 </>}/>
 <Route path="/home" element={
 <>
 <Sidebar/>
 <App/></>}/>
 <Route path="/sports" element={<>
 <Sidebar/>
 <Sports/></>}/>
 <Route path="/gk" element={<>
 <Sidebar/>
 <GeneralKnowledge/></>}/>
 <Route path="/science" element={<>
 <Sidebar/>
 <Science/></>}/>
 <Route path="/iitjee" element={<>
 <Sidebar/>
 <IITJee/></>}/>
  </Routes>
</BrowserRouter>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
