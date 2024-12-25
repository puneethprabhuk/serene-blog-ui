import React from 'react';
import './home.scss';
import ArticleBoxWide from '../../components/article-box-wide/ArticleBoxWide';

const Home = () => {
  return (
    <div className='home-container'>
        <div className="container">
            <ArticleBoxWide />
        </div>
    </div>
  )
}

export default Home