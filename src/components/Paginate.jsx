import React from "react";
import Pagination from "@mui/material/Pagination";

const Paginate = ({ currPage, handleChange, classes, paginationLength }) => {
  return (
    <div className={classes.root}>
      <Pagination
        count={paginationLength}
        onChange={handleChange}
        shape={"rounded"}
        page={currPage}
        className={"pagination"}
        color={"primary"}
      />
    </div>
  );
};

export default Paginate;
