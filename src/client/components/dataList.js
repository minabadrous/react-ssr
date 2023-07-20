import React from "react";

const DataList = ({ head, title, data }) => {
    return (
        <div>
            {head}
            <h1>{title}</h1>
            <ul>
                {data.map((instance) => (
                    <li key={instance.id}>{instance.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataList;
