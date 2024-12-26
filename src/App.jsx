import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ArticleList from './pages/article-list/ArticleList';
import Article from './pages/article/Article';




const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<ArticleList />} />
        <Route path='/post' element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App