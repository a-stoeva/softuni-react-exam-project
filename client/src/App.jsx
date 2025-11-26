import {Router, Routes, Route} from 'react-router'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home';
import Catalog from './components/Catalog';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';

export default function App() {

    return (
        <>

            <Header/>

            <main>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/edit' element={<Edit/>}/>
                    <Route path='/details' element={<Details/>}/>
                </Routes>

            </main>

            <Footer/>
     
        </>
    )
}
