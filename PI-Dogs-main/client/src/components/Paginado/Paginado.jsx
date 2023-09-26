import React from "react";
import { useDispatch } from "react-redux";
import { next , prev } from "../../redux/actions";
import './Paginado.css';
export default function Paginate({ numPage, cantPage }) {

  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <div className="paginate">
        {numPage <= 1 ? (
          <div className="pagination-item" >
            <div></div>
          </div>
        ) : (
          <div className="pagination-item">
            <button onClick={() => dispatch(prev())}>PREV</button>
          </div>
        )}
        
        <h3>{numPage}</h3>

        {numPage > cantPage ? (
          <div className="pagination-item">
            <div></div>
          </div>
        ) : (
          <div className="pagination-item">
            <button onClick={() => dispatch(next())}>NEXT</button>
          </div>
        )}
      </div>
    </div>
  );
}
