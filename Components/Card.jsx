import React from "react";

const Card = (props) => {
  return (
    <div className="hi">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.photo} className="card-img-top" alt="User profile" />
        <div className="card-body">
          <h5 className="card-title">{`${props.name.first} ${props.name.last}`}</h5>
          <p className="card-text">Country: {props.country}</p>
          <a href="#" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
