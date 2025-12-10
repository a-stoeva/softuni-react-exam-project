import {Routes, Route} from 'react-router'
import styles from './App.module.css'

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Details from './components/details/Details';
import CreateEdit from './components/createEdit/CreateEdit';
import {UserProvider} from './contexts/UserContextFile';
import MyPosts from './components/myPosts/myPosts';
import RouteGuard from './components/routeGuard/RouteGuard';
import OwnerGuard from './components/routeGuard/OwnerGuard';

export default function App() {

    return (
        <UserProvider>
        <div className={styles.page}>

            <Header/>

            <main className={styles.main}>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    
                    <Route path='/create' element={<RouteGuard><CreateEdit/></RouteGuard>}/>
                    <Route path='/catalog/:postId/edit' element={<OwnerGuard><CreateEdit/></OwnerGuard>}/>
                    <Route path='/catalog/:postId/details' element={<RouteGuard><Details/></RouteGuard>}/>
                    <Route path='/myPosts' element={<RouteGuard><MyPosts/></RouteGuard>}/>
                    
                </Routes>

            </main>

            <Footer/>
     
        </div>
        </UserProvider>
    )
}
