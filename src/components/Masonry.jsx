import React from 'react';

const Masonry = (props) => {
    const columnWrapper = {};
    const result = [];

    // create columns
    for (let i = 0; i < props.columns; i++) {
        columnWrapper[`column${i}`] = [];
    };

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % props.columns;
        columnWrapper[`column${columnIndex}`].push(
            <div className="child">
                {props.children[i]}
            </div>
        );
    };

    for (let i = 0; i < props.columns; i++) {
        result.push(
            <div className="column">
                {columnWrapper[`column${i}`]}
            </div>
        );
    };

    return (
        <div className="masonry">
            {result}
        </div>
    )
}

export default Masonry;
