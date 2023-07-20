import React from "react";

const PageNotFound = ({ staticContext = {} }) => {
    staticContext.pageNotFound = true;

    return <h1>Ops, page is not found</h1>;
};

export default {
    component: PageNotFound,
};
