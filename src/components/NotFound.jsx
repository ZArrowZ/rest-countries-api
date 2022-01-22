import React from "react";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="notFound">
        Page Not Found <BiErrorAlt className="sadFace-icon" />
        <Link className="notFound__link" to={"/"}>
          <button>Go Back To Home Page</button>
        </Link>
      </h1>
    </>
  );
};

export default NotFound;
