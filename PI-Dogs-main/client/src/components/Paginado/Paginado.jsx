import React from "react";
import { useDispatch } from "react-redux";
import { next , prev } from "../../redux/actions";

export default function Paginate({ numPage, cantPage }) {

  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <div className="paginate">
        {numPage <= 1 ? (
          <div>
            <div></div>
          </div>
        ) : (
          <div>
            <button onClick={() => dispatch(prev())}>PREV</button>
            <p>{numPage - 1}</p>
          </div>
        )}
        
        <h3>{numPage}</h3>

        {numPage >= cantPage ? (
          <div>
            <div></div>
          </div>
        ) : (
          <div>
            <p>{numPage + 1}</p>
            <p>{numPage + 2}</p>
            <p>{`...${cantPage}`}</p>
            <button onClick={() => dispatch(next())}>NEXT</button>
          </div>
        )}
      </div>
    </div>
  );
}
