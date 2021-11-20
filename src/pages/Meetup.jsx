import React, { useState, Fragment } from 'react';
import MeetupContent from '../components/MeetupContent';

const Meetup = () => {
    const [showKennel1, setKennel1] = useState(true);
    const [showKennel2, setKennel2] = useState(false);
    const [showKennel3, setKennel3] = useState(false);
    const [showKennel4, setKennel4] = useState(false);

    const toggleKennel1 = () => {
        toggleAll();
        setKennel1(true);
    }

    const toggleKennel2 = () => {
        toggleAll();
        setKennel2(true);
    }

    const toggleKennel3 = () => {
        toggleAll();
        setKennel3(true);
    }

    const toggleKennel4 = () => {
        toggleAll();
        setKennel4(true);
    }

    const toggleAll = () => {
        setKennel1(false);
        setKennel2(false);
        setKennel3(false);
        setKennel4(false);
    }

    return (
        <div className="wrapper">
            <h2 className="notice-action">Klicka  nedan för olika kennel träffar</h2>
            <div className="select-meetup">
                <div className="select">
                    <a href="#" onClick={toggleKennel1}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1595575452/meetup/1/163_rsmxqx.jpg" alt="Kennel Träff 1" />
                        <p className="caption">Kennel Träff 1</p>
                    </a>
                </div>
                <div className="select">
                    <a href="#" onClick={toggleKennel2}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1596205582/meetup/2/396_g3dxsq.jpg" alt="Kennel Träff 2" />
                        <p className="caption">Kennel Träff 2</p>
                    </a>
                </div>
                <div className="select">
                    <a href="#" onClick={toggleKennel3}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1596205433/meetup/3/Kenneltra%CC%88ff-O%CC%88rkeljunga-15-sept.-2019-076_hgw8nc.jpg" alt="Kennel Träff 3" />
                        <p className="caption">Kennel Träff 3</p>
                    </a>
                </div>
                <div className="select">
                    <a href="#" onClick={toggleKennel4}>
                        <img src="https://res.cloudinary.com/blackneasy/image/upload/v1637418349/meetup/4/257916639_643359033508645_2175558208546848324_n_dxny1z.jpg" alt="Kennel Träff 3" />
                        <p className="caption">Kennel Träff 4 - 31 okt 2021</p>
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
                {showKennel4 ?
                    <MeetupContent meetup={"meetup4"} />
                    : ""}
            </div>
        </div>
    )
}

export default Meetup;
