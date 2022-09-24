import React, {useState} from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Header from './component/Header/Header'
import SideBar from './component/SideBar/SideBar.'
import SingleRecipe from './pages/SingleRecipe';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' exact  element = {<LandingPage />} />
        <Route path='/search' exact  element = {<SearchPage />} />
        <Route path="single_recipe/:id" exact element={<SingleRecipe />} />
      </Routes>
    </Router>
  )
}

export default App
