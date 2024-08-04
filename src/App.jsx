import React from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { DarkModeProvider } from './contexts/DarkMode'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {
    return (
        <DarkModeProvider>
            <Header />
            <Outlet />
        </DarkModeProvider>
    )
}
