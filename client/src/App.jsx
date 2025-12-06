import {Routes, Route} from 'react-router'
import styles from './App.module.css'

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import Details from './components/details/Details';

export default function App() {

    return (
        <div className={styles.page}>

            <Header/>

            <main className={styles.main}>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/edit' element={<Edit/>}/>
                    <Route path='/catalog/:postId/details' element={<Details/>}/>
                </Routes>

            </main>

            <Footer/>
     
        </div>
    )
}
