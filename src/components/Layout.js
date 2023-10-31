import React from "react";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto d-flex flex-column justify-content-between wrapper-layout">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
