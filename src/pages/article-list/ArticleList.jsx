import React from 'react';
import './articlelist.scss';
import ArticleBox from '../../components/article-box/ArticleBox';

const ArticleList = () => {
    return (
        <div className='article-list'>
            <div className="container">
                <div className="articles">
                    <div className="section-title-container">
                        <h3 className='section-title'>All Posts</h3>
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
                        <button className="btn btn-outline">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleList