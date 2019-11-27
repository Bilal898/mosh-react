import React from 'react'
import _ from 'lodash'

export const Pagination = (props) => {

    const { itemsCount, pageSize, currentPage, onPageChange} = props
    
    console.log(currentPage);
    
    const pagesCount = Math.ceil(itemsCount / pageSize)
    if (pagesCount === 1) return null
    const pages = _.range(1, pagesCount + 1)
    return (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">

        {/* <ul class="pagination"> */}
            {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> */}
            {/* <li class="page-item"><a class="page-link" >1</a></li>
            <li class="page-item"><a class="page-link" >2</a></li>
            <li class="page-item"><a class="page-link" >3</a></li> */}
            {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
            {pages.map(page => (
                <li className={page === currentPage ? 'page-item active' : 'page-item'} 
                    key={page}>
                    <a className="page-link"
                        onClick={() => onPageChange(page)}
                    >{page}</a>             
                </li>
            ))}
        </ul>
        </nav>

    )
}
