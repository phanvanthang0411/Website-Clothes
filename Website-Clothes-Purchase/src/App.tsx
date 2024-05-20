import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './structure/router/root'
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
