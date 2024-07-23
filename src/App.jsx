import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'


import { OrderConfirmed } from './components/OrderConfirmed'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { Featured } from './components/Featured'
import { New } from './components/New'
import { Users } from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'

const LazyAbout = React.lazy(() => import('./components/About'))
const LazyProfile = React.lazy(() => import('./components/ProfilePage'))


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-confirmed' element={<OrderConfirmed />} />
        <Route path='products' element={<Products />} >
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='profile' element={
          <React.Suspense fallback='Loading...'>
            <RequireAuth>
              <LazyProfile />
            </RequireAuth>
          </React.Suspense>
        } />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
