
// import { Fragment } from 'react';
// import Conditionalrendering from './components/css/conditionalrendering';
// import Eventhandiling from './components/css/eventhandiling';
// import Fetchdata from './components/fetchdata'
// import TodoApp from './TodoApp';
// import TodoApp from './TodoApp';
// import Arraycolors from './arraycolors';
// import Employeelist from './components/employeelist';
// import HideAndShowimage from './components/hideAndShowimage';
// import ReactFragement from 'reactFragement'


// import Counter from './components/counter'
// import Fakeapidatafetch from './components/fakeapidatafetch'; 
// import Nave from './components/nave';
// import Moviefetch from './components/moviefetch';
// import UseRefcomponent from './components/useRefcomponent';
// import CustomeFormVlidation from './components/CustomeFormVlidation';
// import Imageslider from './components/Imageslider';
// import Formdata from './components/formdata';
// import UseReducerfetchdata from './components/useReducerfetchdata';
// import Practiceformdata from './components/practiceformdata';
// import Practicecounter from './components/practicecounter';
// import Practicehideandshowimage from './components/practicehideandshowimage';
// import Practiceshowmorelesscontent from './components/practiceshowmorelesscontent';

// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Login from './components/routingpart/login';
// import Signup from './components/routingpart/signup';
// import Pagenotfound from './components/routingpart/pagenotfound';
// import Formdata from './components/fetchdata';


// ~ routing concept main wala
import Nave from './components/nave'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/practiceRouting/home';
import About from './components/practiceRouting/about';
import Contact from './components/practiceRouting/contact';
import Gallery from './components/practiceRouting/gallery';
import Products from './components/practiceRouting/products';
import Navbar from './components/practiceRouting/navbar';
import Mobile from './components/practiceRouting/mobile';
import Buds from './components/practiceRouting/buds';
import Laptop from './components/practiceRouting/laptop';

import React from 'react'
import './App.css';

import Counter from './components/counter'
import CustomeFormVlidation from './components/CustomeFormVlidation';
import Fakeapidatafetch from './components/fakeapidatafetch'
import Fetchdata from './components/fetchdata'
import Formdata from './components/formdata'
import HideAndShowimage from './components/HideAndShowimage'
import Imageslider from './components/Imageslider'
import Moviefetch from './components/moviefetch'
import Practicehideandshowimage from './components/practicehideandshowimage'
import Practiceshowmorelesscontent from './components/practiceshowmorelesscontent'
import UseRefcomponent from './components/useRefcomponent';
import UseReducerfetchdata from './components/useReducerfetchdata';
import ImageONclick from './components/imageonclick';


// ! CRUD wala start
// import Home from './components/practiceRouting/home';
// import Addproduct from './components/crudwala/addproduct';
// import Allproducts from './components/crudwala/Allproducts';
// import ProductDetails from './components/crudwala/ProductsDetails';
// import Updateproduct from './components/crudwala/Updateproduct';

import Toggle from './components/custom hook/Toggle';
import CounterOne from './components/custom hook/CounterOne';
import Timeout from './components/custom hook/Timeout';
import Debounce from './components/custom hook/Debounce';
import UpdateEffect from './components/custom hook/UpdateEffect';


function App() {
  return (
    <>
    <Nave/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/products' element={<Products/>}>
    <Route path='mobile' element={<Mobile/>} />
    <Route path='laptop' element={<Laptop/>} />
    <Route path='buds' element={<Buds/>} />
    </Route>
    </Routes>
    </BrowserRouter>

    <Counter/>
    <CustomeFormVlidation/>
    <Fakeapidatafetch/>
    <Fetchdata/>
    <Formdata/>
    <HideAndShowimage/>
    <Toggle/>
    <CounterOne/>
    <Timeout/>
    <Debounce/>
    <UpdateEffect/>
    <Imageslider/>
    <Moviefetch/>
    <Practicehideandshowimage/>
    <Practiceshowmorelesscontent/>
    <UseRefcomponent/>
    <UseReducerfetchdata/>
    <ImageONclick/>
   


    </>
    
  );
}

export default App;
// <Route path='/mobile' element={<Mobile/>} />
// <Route path='/laptop' element={<Laptop/>} />
// <Route path='/buds' element={<Buds/>} />
// <Route path='nested' element={<Nested />}/>
// <Route path='nestedinsidenested' element={<Nestedinsidenested />}/>


// ~ routing concept main wala
// <BrowserRouter>
//     <Navbar/>
//     <Routes>
//     <Route path='/' element={<Home />} />
//     <Route path='/about' element={<About />} />
//     <Route path='/contact' element={<Contact />} />
//     <Route path='/gallery' element={<Gallery />} />
//     <Route path='/products' element={<Products/>}>
//     <Route path='mobile' element={<Mobile/>} />
//     <Route path='laptop' element={<Laptop/>} />
//     <Route path='buds' element={<Buds/>} />
//     </Route>

//     </Routes>
//     </BrowserRouter>




// crud wala 
// <BrowserRouter>
//     <Routes>
//      <Route path='/' element={<Home/>}></Route>
//      <Route path='/addproducts' element={<Addproduct/>}></Route>
//      <Route path='/products' element={<Allproducts/>}></Route>
//      <Route path='/product/:pid' element={<ProductDetails/>}></Route>
//      <Route path='/updateproduct/:id' element={<Updateproduct/>}></Route>
//     </Routes>
//     </BrowserRouter>


























// <Nave/>
// <Counter/>
// <Fakeapidatafetch/>
// <Moviefetch/>
// <UseRefcomponent/>
// <CustomeFormVlidation/>
// <Imageslider/>
// <Formdata/>
// <UseReducerfetchdata/>
// <Practiceformdata/>
// <Practicecounter/>
// <Practicehideandshowimage/>
// <Practiceshowmorelesscontent/>





















//  <Employeelist/>
// <Conditionalrendering/>
// <Eventhandiling/>
// <Fetchdata/>

// <h1>hello baby welcome to GOA ,
//   lets come and enjoy this time </h1>
//   <p>my name is harshit gandhi  and one more thing is that i have been selected in cognigent it company</p>
//   <img src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg" width="360px" height="300px" alt="" />
//   <h1>hy guys welcome to my blog </h1>
//   <h4>my best friends name is ........ </h4>
//   <Details name="hy dog"  age="2" /> 



