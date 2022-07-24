import React from 'react';
import _ from 'lodash';
import { nanoid } from 'nanoid';

 const Pagination = (props) => {
    const { itemsCount, itemsPerPage, onPageChange, currentPage } = props;
    const totalPages = Math.ceil(itemsCount / itemsPerPage);
    const pages = _.range(1, totalPages + 1);
    return (
      <React.Fragment>
        <nav aria-label="page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            {pages.map(page => <li className={page === currentPage ? "page-item active" : "page-item"}
                                   key={nanoid()}
                                   onClick={() => onPageChange(page)}>
              <a class="page-link">{page}</a></li>)}
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
}

export default Pagination;
