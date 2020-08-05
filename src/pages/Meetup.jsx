import React, { useState, Fragment } from 'react';
import MeetupContent from '../components/MeetupContent';

const Meetup = () => {
    const [showKennel1, setKennel1] = useState(true);
    const [showKennel2, setKennel2] = useState(false);
    const [showKennel3, setKennel3] = useState(false);

    const toggleKennel1 = () => {
        toggleAll();
        setKennel1(!showKennel1);
    }

    const toggleKennel2 = () => {
        toggleAll();
        setKennel2(!showKennel2);
    }

    const toggleKennel3 = () => {
        toggleAll();
        setKennel3(!showKennel3);
    }

    const toggleAll = () => {
        setKennel1(false);
        setKennel2(false);
        setKennel3(false);
    }

    return (
        <div className="wrapper">
            <h2 className="notice-action">Klicka  nedan för olika kennel träffar</h2>
            <div className="select-meetup">
                <div className="select">
                    <a href="#" onClick={toggleKennel1}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1595575455/meetup/1/184_xvaqe8.jpg" alt="Kennel Träff 1" />
                        <p className="caption">Kennel Träff 1</p>
                    </a>
                </div>
                <div className="select">
                    <a href="#" onClick={toggleKennel2}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1595575455/meetup/1/184_xvaqe8.jpg" alt="Kennel Träff 2" />
                        <p className="caption">Kennel Träff 2</p>
                    </a>
                </div>
                <div className="select">
                    <a href="#" onClick={toggleKennel3}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1595575455/meetup/1/184_xvaqe8.jpg" alt="Kennel Träff 3" />
                        <p className="caption">Kennel Träff 3</p>
                    </a>
                </div>
            </div>

            <div className="meetup-line"></div>

            <div className="cards-meetup">
                {showKennel1 ?
                    <MeetupContent meetup={"meetup1"} />
                    : ""}
                {showKennel2 ?
                    <MeetupContent meetup={"meetup2"} />
                    : ""}
                {showKennel3 ?
                    <MeetupContent meetup={"meetup3"} />
                    : ""}
            </div>
        </div>
    )
}

export default Meetup;
