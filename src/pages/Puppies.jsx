import React, { useState, Fragment } from 'react';
import PuppiesSelect from '../components/PuppiesSelect';
import PuppiesContent from '../components/PuppiesContent';

const Puppies = () => {
    const [showMother1, setShowMother1] = useState(true);
    const [showMother2, setShowMother2] = useState(false);
    const [showMother3, setShowMother3] = useState(false);
    const [showMother4, setShowMother4] = useState(false);
    const [showMother5, setShowMother5] = useState(false);

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
    const toggleMother5 = () => {
        toggleAll();
        setShowMother5(!showMother5);
    }

    const toggleAll = () => {
        setShowMother1(false);
        setShowMother2(false);
        setShowMother3(false);
        setShowMother4(false);
        setShowMother5(false);
    }

    return (
        <Fragment>
            <div className="wrapper">
                <h2 className="notice-action">Klicka på Mamma - Pappa för att se deras valparna</h2>
                <div className="card-puppies">
                    <PuppiesSelect toggle={toggleMother1} imageMother={"profile/Easy_profile"} imageFather={"profile/Kastor_profile"} nameMother={"Easy"} nameFather={"Kastor"} />
                    <PuppiesSelect toggle={toggleMother2} imageMother={"profile/Vimsa_profile"} imageFather={"profile/Zkrutt_profile"} nameMother={"Vimsa"} nameFather={"Zkrutt"} />
                    <PuppiesSelect toggle={toggleMother3} imageMother={"/profile/Shantis_profile"} imageFather={"profile/Zkrutt_profile"} nameMother={"Shantis"} nameFather={"Zkrutt"} />
                    <PuppiesSelect toggle={toggleMother4} imageMother={"profile/Vimsa_profile"} imageFather={"profile/Kazan_profile"} nameMother={"Vimsa"} nameFather={"Kazan"} />
                    <PuppiesSelect toggle={toggleMother5} imageMother={"profile/Tiffy_profile"} imageFather={"profile/"} nameMother={"Tiffy"} nameFather={"Hane"} />
                </div>

                {showMother1 ?
                    <div className="select-divider">
                        <h2 className="text-align-center">Easy och Kastor</h2>
                        <div className="wrapper puppies-images">
                            <PuppiesContent puppies={"puppies_easy_kastor_1"} />
                        </div>
                    </div>
                    : ""}
                {showMother2 ?
                    <div className="select-divider">
                        <h2 className="text-align-center">Vimsa och Zkrutt</h2>
                        <div className="wrapper puppies-images">
                            <PuppiesContent puppies={"puppies_vimsa_zkrutt"} />
                        </div>
                    </div>
                    : ""}
                {showMother3 ?
                    <div className="select-divider">
                        <h2 className="text-align-center">Shantis och Zkrutt</h2>
                        <div className="wrapper puppies-images">
                            <PuppiesContent puppies={"puppies_shantis_zkrutt"} />
                        </div>
                    </div>
                    : ""}
                {showMother4 ?
                    <div className="select-divider">
                        <h2 className="text-align-center">Vimsa och Kazan</h2>
                        <div className="wrapper puppies-images">
                            <PuppiesContent puppies={"puppies_vimsa_kazan"} />
                        </div>
                    </div>
                    : ""}
                {showMother5 ?
                    <div className="select-divider">
                        <h2 className="text-align-center">Tiffy och Hane</h2>
                        <div className="wrapper puppies-images">
                            <PuppiesContent puppies={"puppies_tiffy"} />
                        </div>
                    </div>
                    : ""}
            </div>
        </Fragment>
    )
}

export default Puppies;
