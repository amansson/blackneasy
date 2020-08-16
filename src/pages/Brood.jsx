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
        setShowMother1(true);
    }

    const toggleMother2 = () => {
        toggleAll();
        setShowMother2(true);
    }

    const toggleMother3 = () => {
        toggleAll();
        setShowMother3(true);
    }

    const toggleMother4 = () => {
        toggleAll();
        setShowMother4(true);
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

                {showMother1 ?
                    <div className="select-divider">
                        <BroodContent brood={"Easy och Kastor"} date={"20 November 2015 "} images={"easy3"} />
                        <BroodContent brood={"Easy och Kastor"} date={"5 September 2014 "} images={"easy2"} />
                        <BroodContent brood={"Easy och Kastor"} date={"9 Februari 2014 "} images={"easy1"} />
                    </div>
                    : ""}
                {showMother2 ?
                    <div className="select-divider">
                        <BroodContent brood={"Vimsa och Kazan"} date={"7 December 2018"} images={"brood_vimsa_3"} />
                        <BroodContent brood={"Vimsa och Zkrutt"} date={"13 Juni 2017"} images={"brood_vimsa_2"} />
                        <BroodContent brood={"Vimsa och Zkrutt"} date={"9 Oktober 2016"} images={"brood_vimsa_1"} />
                    </div>
                    : ""}
                {showMother3 ?
                    <div className="select-divider">
                        <BroodContent brood={"Jixie och Proffen"} date={"14 Mars 2019"} images={"jixie1"} />
                    </div>
                    : ""}
                {showMother4 ?
                    <div className="select-divider">
                        <BroodContent brood={"Shantis och Zkrutt"} date={"2 Juli 2017"} images={"shantis1"} />
                        <BroodContent brood={"Shantis och Kazan"} date={"8 Juni 2020"} images={"shantis2"} />
                    </div>
                    : ""}
            </div>
        </Fragment>
    )
}

export default Brood;
