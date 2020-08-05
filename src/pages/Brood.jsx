import React, { Fragment, useState } from 'react';
import BroodContent from '../components/BroodContent';
import BroodSelect from '../components/BroodSelect';

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
                <div className="select-brood">
                    <BroodSelect toggle={toggleMother1} name={"Easy"} image={"profile/Easy_profile"} race={"Groenendael"} />
                    <BroodSelect toggle={toggleMother2} name={"Vimsa"} image={"profile/Vimsa_profile"} race={"Groenendael"} />
                    <BroodSelect toggle={toggleMother3} name={"Jixie"} image={"profile/Jixie_profile"} race={"Tervuerens"} />
                    <BroodSelect toggle={toggleMother4} name={"Shantis"} image={"profile/Shantis_profile"} race={"Groenendael"} />
                </div>
            </div>

            {showMother1 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy2"} />
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy1"} />
                    </div>
                </div>
                : ""}
            {showMother2 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <BroodContent brood={"Vimsa och Kazan"} date={"07 December 2018"} images={"brood_vimsa_3"} />
                        <BroodContent brood={"Vimsa och Zkrutt"} date={"13 Juni 2017"} images={"brood_vimsa_2"} />
                        <BroodContent brood={"Vimsa och Zkrutt"} date={"09 Oktober 2016"} images={"brood_vimsa_1"} />
                    </div>
                </div>
                : ""}
            {showMother3 ?
                <div className="brood-bg">
                    <div className="wrapper">
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014"} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014"} images={"easy1"} />
                    </div>
                </div>
                : ""}
            {showMother4 ?
                <div className="brood-bg">
                    <div className="wrapper">                                         
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015"} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"05 September 2014"} images={"easy2"} />
                    </div>
                </div>
                : ""}

        </Fragment>
    )
}

export default Brood;
