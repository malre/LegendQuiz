import React from 'react'
import Aux from '../Hoc/Auxiliary';
import '../containers/bootstrap.min.css';


const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i= 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <Aux >
        <nav aria-label="...">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                    <a className="page-link" onClick={() => paginate(number)} href='!#' >
                   n°= {number}Test Base
                    </a>
                    </li>
                ))}
            </ul>
        </nav>
        
        </Aux>
    )
};
export default Pagination;

