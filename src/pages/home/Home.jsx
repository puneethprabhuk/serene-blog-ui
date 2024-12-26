import React from 'react';
import './home.scss';
import ArticleBoxWide from '../../components/article-box-wide/ArticleBoxWide';
import ArticleBox from '../../components/article-box/ArticleBox';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="container">
                <ArticleBoxWide />

                <div className="articles">
                    <div className="section-title-container">
                        <h3 className='section-title'>All Blogs</h3>
                    </div>

                    <div className='article-list'>
                        <ArticleBox />
                        <ArticleBox />
                        <ArticleBox />
                        <ArticleBox />
                        <ArticleBox />
                        <ArticleBox />
                        <ArticleBox />
                    </div>
                    <div className='home-view-button-container'>
                        <button className="btn btn-outline">View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home