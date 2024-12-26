import React from 'react';
import './articleboxwide.scss';

const ArticleBoxWide = () => {
  return (
    <div className='article-box-wide'>
      <div className="image-container">
        <img src="https://kotaielectronics.com/wp-content/uploads/2024/01/on-device-generative-ai-with-sub-10-billion-parameter-models.jpg" alt="article-image" />
      </div>
      <div className="content-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2em' }}>
          <div className='author'>Puneeth Prabhu</div>
          <p className='category-label'>Science</p>
        </div>
        <h3 className='title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum optio nobis dolorem excepturi commodi quia!</h3>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum iusto modi. Aperiam ex est voluptatem tenetur expedita mollitia quod voluptatibus enim assumenda sunt explicabo, officiis molestias sequi tempore aliquid.</p>
        <div className="basic-details-container">
          <button className="btn btn-fill">Read This Blog</button>
          <div>
            <span className="basic-details">Just now &nbsp;|&nbsp;</span>
            <span className="basic-details">10 mins read</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleBoxWide