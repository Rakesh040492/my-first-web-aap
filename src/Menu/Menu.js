import React, {useState,lazy,Suspense} from 'react'
import './Menu.css'
import { HashRouter, Routes,Route, Navigate,useLocation} from 'react-router-dom'

//import Home from '../Home'
//import About from '../About'
//import Contact from '../Contact'

const Home=lazy(()=>import('../Home'))
const About=lazy(()=>import('../About'))
const Contact=lazy(()=>import('../Contact'))

export const Menu = () => {
    const location=useLocation()

    const [menuItem,setMenuItem]=useState(location.pathname.slice(1))
    const fnMenuClick=(eve)=>{
        eve.stopPropagation()
        const {id,nodeName}=eve.target
        if (nodeName=== 'A') {
            setMenuItem(id)
        }
        
    }
  return (
    <div>
        <div className='menu text-end' onClick={fnMenuClick}>
            <a className={menuItem==='home' && 'menuActive'}id="home" href='#/Home'>Home</a>
            <a className={menuItem==='About' && 'menuActive'}id="About" href='#/About'>About</a>
            <a className={menuItem==='Contact' && 'menuActive'}id="Contact"  href='#/Contact'>Contact</a>
        </div>
        <Suspense fallback="Loading..">
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<Navigate to='/home'/>}/>
            </Routes>
        </Suspense>
        
    </div>
  )
}
