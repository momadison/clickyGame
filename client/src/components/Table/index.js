import React from "react";
import Card from "../Card";

const Table = props => 
    <div className="row">
      <div className="col-md-3">
        <Card id= {props.id}
              thumbnail= {props.thumbnail}
        />
      </div>
    </div>

export default Table;