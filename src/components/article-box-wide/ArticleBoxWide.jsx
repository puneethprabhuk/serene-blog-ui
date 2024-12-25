import React from 'react';
import './articleboxwide.scss';

const ArticleBoxWide = () => {
  return (
    <div className='article-box-wide'>
      <div className="image-container">
        <img src="https://kotaielectronics.com/wp-content/uploads/2024/01/on-device-generative-ai-with-sub-10-billion-parameter-models.jpg" alt="article-image" />
      </div>
      <div className="content-container">
        <div className='date'>23-12-2024</div>
        <h3 className='title'>How to write a good prompt for chatGPT</h3>
        <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate nemo eius non consequuntur deserunt.</p>
        <button className="btn btn-fill">Read This Blog</button>
      </div>
    </div>
  )
}

export default ArticleBoxWide