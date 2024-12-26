import React from 'react';
import './articlebox.scss';
import { Link } from 'react-router-dom';



const ArticleBox = () => {
  return (
    <Link to='/post' className='article-box'>
      <div className="image-container">
        <img src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg" alt="article-image" />
      </div>
      <div className="content-container">
        <div className='basic-details'>
          <span className='basic-details-label' style={{ fontWeight: '500' }}>Puneeth Prabhu</span>
          <div className='category-label'>Technology</div>
        </div>
        <h3 className='title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, laudantium ea eum porro ab saepe!</h3>
        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque magni aliquid ipsum praesentium eum fugiat atque laborum animi omnis voluptas!</p>
        {/* <button className="btn btn-outline">Read Now</button> */}
        <div>
          <span className='basic-details-label'>Just now &nbsp;|&nbsp;</span>
          <span className='basic-details-label'>4 mins read</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleBox