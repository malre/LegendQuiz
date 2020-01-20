import React from 'react';



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
    <nav className="card-text">
      <ul className='pagination mx-auto'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item mx-auto'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default Pagination;
