import React, { Fragment, useState } from 'react';
import { Image } from 'cloudinary-react';
import BroodContent from '../components/BroodContent';

const Brood = () => {
    const [showMother1, setShowMother1] = useState(true);
    const [showMother2, setShowMother2] = useState(false);
    const [showMother3, setShowMother3] = useState(false);
    const [showMother4, setShowMother4] = useState(false);

    const toggleMother1 = () => {
        toggleAll();
        setShowMother1(!showMother1);
    }

    const toggleMother2 = () => {
        toggleAll();
        setShowMother2(!showMother2);
    }

    const toggleMother3 = () => {
        toggleAll();
        setShowMother3(!showMother3);
    }

    const toggleMother4 = () => {
        toggleAll();
        setShowMother4(!showMother4);
    }

    const toggleAll = () => {
        setShowMother1(false);
        setShowMother2(false);
        setShowMother3(false);
        setShowMother4(false);
    }

    return (
        <Fragment>
            <div className="wrapper">
                <h2 className="notice-action">Klicka på tikarna för att se deras valparna</h2>
                <div className="cards-brood">
                    <div className="card" onClick={toggleMother1}>
                        <Image cloudName="blackneasy" publicId="easy" alt="Easy" />
                        <div className="body">
                            <h2>Easy</h2>
                            <p>Groenendael</p>
                        </div>
                    </div>

                    <div className="card" onClick={toggleMother2}>
                        <Image cloudName="blackneasy" publicId="jixie" alt="Jixie" />
                        <div className="body">
                            <h2>Jixie</h2>
                            <p>Tervueren</p>
                        </div>
                    </div>

                    <div className="card" onClick={toggleMother3}>
                        <Image cloudName="blackneasy" publicId="jixie" alt="Jixie" />
                        <div className="body">
                            <h2>Jixie</h2>
                            <p>Tervueren</p>
                        </div>
                    </div>

                    <div className="card" onClick={toggleMother4}>
                        <Image cloudName="blackneasy" publicId="Tiffy" alt="Jixie" />
                        <div className="body">
                            <h2>Tiffy</h2>
                            <p>Tervueren</p>
                        </div>
                    </div>
                </div>
            </div>

            {showMother1 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy2"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy1"} />
                    </div>
                </div>
                : ""}
            {showMother2 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <h2 className="text-align-center">Jixie</h2>
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy2"} />

                    </div>
                </div>
                : ""}
            {showMother3 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <h2 className="text-align-center">Jixie</h2>
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy1"} />
                    </div>
                </div>
                : ""}
            {showMother4 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <h2 className="text-align-center">Tiffy</h2>                        
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014 "} images={"easy2"} />
                    </div>
                </div>
                : ""}

        </Fragment>
    )
}

export default Brood;
