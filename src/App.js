import React from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import logo from './logo.png'

const App = () => {
    return (
        <div>
            <img src={logo} />
            <h1>Webpack React Setup.</h1>
        </div>
    )
}

export default hot(module)(App)