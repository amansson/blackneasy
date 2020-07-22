import React, { useState, Fragment } from 'react';
import Modal from './Modal';
import MasonryContent from './MasonryContent';

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
            <Fragment key={i}>
                <MasonryContent content={props.children[i]} />
            </Fragment>
        );
    };

    for (let i = 0; i < props.columns; i++) {
        result.push(
            <div key={i} className="column">
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
