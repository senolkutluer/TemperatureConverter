import React from "react";
import Categories from "./Categories";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Categories/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
