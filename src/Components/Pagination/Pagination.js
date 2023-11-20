import React from "react";
import './Pagination.css';



function MyPagination () {
    return (

<>
              <nav className= "paginationTop" >
                 <ul className="pagination ">
                     <li className="page-item disabled">
                        <a className="page-link" href="shop" tabIndex="-1">Previous</a>
                    </li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                       <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item">
                         <a className="page-link" href="#">Next</a>
                    </li>
                 </ul>
                </nav>

</>


    )
}

export default MyPagination;