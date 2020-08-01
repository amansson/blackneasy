import React, { useState, Fragment } from 'react';
import PuppiesSelect from '../components/PuppiesSelect';
import PuppiesContent from '../components/PuppiesContent';

const Puppies = () => {
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
                <h2 className="notice-action">Klicka på Mamma - Pappa för att se deras valparna</h2>
                <div className="card-puppies">
                    <PuppiesSelect toggle={toggleMother1} imageMother={"Easy_profile"} imageFather={"Kastor_profile"} nameMother={"Easy"} nameFather={"Kastor"} />
                    <PuppiesSelect toggle={toggleMother2} imageMother={"Vimsa_profile"} imageFather={"Zkrutt_profile"} nameMother={"Vimsa"} nameFather={"Zkrutt"} />
                    <PuppiesSelect toggle={toggleMother3} imageMother={"Shantis_profile"} imageFather={"Zkrutt_profile"} nameMother={"Shantis"} nameFather={"Zkrutt"} />
                    <PuppiesSelect toggle={toggleMother4} imageMother={"Vimsa_profile"} imageFather={"Kazan_profile"} nameMother={"Vimsa"} nameFather={"Kazan"} />
                </div>
            </div>

            {showMother1 ?
                <div className="brood-bg">
                    <div className="wrapper puppies-images">
                        <PuppiesContent puppies={"puppies_easy_kastor_1"} />
                    </div>
                </div>
                : ""}
            {showMother2 ?
                <div className="brood-bg">
                    <div className="wrapper puppies-images">
                        <PuppiesContent puppies={"puppies_vimsa_zkrutt"} />
                    </div>
                </div>
                : ""}
            {showMother3 ?
                <div className="brood-bg">
                    <div className="wrapper puppies-images">
                        <PuppiesContent  puppies={"puppies_shantis_zkrutt"} />
                    </div>
                </div>
                : ""}
            {showMother4 ?
                <div className="brood-bg">
                    <div className="wrapper puppies-images">
                        <PuppiesContent  puppies={"puppies_vimsa_kazan"} />
                    </div>
                </div>
                : ""}
        </Fragment>
    )
}

export default Puppies;
