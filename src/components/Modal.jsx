import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Modal = (props) => {

    return (
        <div className="modalBackground" onClick={props.showModal} >
            <button onClick={props.showModal} className="exitButton"><MdClose /></button>
            <div className="modalInner">
                <h2>{props.caption}</h2>
                {props.image}
            </div>
        </div>
    )
}

export default Modal;
