import { useState } from 'react'
import './App.css'
import Searcher from './components/Searcher/Searcher'
import { Routes, Route, Link } from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail'

function App() {

  return (
    <>
     

      <Routes>
        <Route path='/' element={<Searcher />} />
        <Route path='/:characterId' element={<CharacterDetail />} />
      </Routes>

    </>
  )
}

export default App

