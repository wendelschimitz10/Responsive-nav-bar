import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import { Home } from '../Home/Home'
import { Feedback } from '../Feedback/Feedback'
import { AboutUs } from '../AboutUs/AboutUs'
import { Contact } from '../Contact/Contact'
import { NotFound404 } from '../NotFound404/NotFound404'
import { HeaderNavBar } from '../../components/HeaderNavBar/HeaderNavBar'


export const RoutePages = () => {
    return (
        <Router>
            <HeaderNavBar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/feedback' element={<Feedback />}/>
                <Route path='/about-us' element={<AboutUs />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/*' element={<NotFound404 />}/>
            </Routes>
        </Router>
    )
}