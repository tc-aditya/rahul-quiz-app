import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HeaderNew from "../HeaderNew/header.new";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div></div>
      <HeaderNew />
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
