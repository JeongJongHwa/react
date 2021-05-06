import React from 'react';
import ReactDOM from 'react-dom';
import WriteList from './T1/WriteList';
import Header from './T1/Header';
import Menu from './T1/Menu';
import './index.css';

   // 임의 가상 data 전달
   const testObject = [
    {"index":1,"name":"홍길동","age":18},
    {"index":2,"name":"이순신","age":51},
    {"index":3,"name":"도깨비","age":1999},
    {"index":4,"name":"빈센조","age":31}
  ]
   

ReactDOM.render(
  <React.StrictMode>
     <Header />
     <Menu />
    <WriteList object={testObject} />
    
  </React.StrictMode>,
  document.getElementById('root')
);



