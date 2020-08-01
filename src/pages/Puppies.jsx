import React, { Fragment } from 'react';
import Puppy from '../components/Puppy';
import FetchData from '../components/FetchData';
import { FaHeart } from 'react-icons/fa';

const Puppies = () => {

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/puppy.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <div className="wrapper">
                <h2 className="notice-action">Klicka på Mamma - Pappa för att se deras valparna</h2>
                <div className="card-puppies">
                    <div className="puppies-select">
                        <div class="select">
                            <img src="https://res.cloudinary.com/blackneasy/image/upload/v1596117516/Easy.jpg" />
                            <div class="select-infos">
                                <h2>Easy</h2>
                                <p>Mamma</p>
                            </div>
                        </div>
                        <div className="bg">
                            <div class="avatar-bordered">
                                <div className="heart"><FaHeart /></div>
                            </div>
                        </div>
                        <div class="select">
                            <img src="https://res.cloudinary.com/blackneasy/image/upload/v1593848797/Jixie.jpg" alt="" />
                            <div class="select-infos">
                                <h2>Jixie</h2>
                                <p>Pappa</p>
                            </div>
                        </div>
                    </div>
                    <div className="puppies-select">
                        <div class="select">
                            <img src="https://res.cloudinary.com/blackneasy/image/upload/v1596117516/Easy.jpg" />
                            <div class="select-infos">
                                <h2>Easy</h2>
                                <p>Mamma</p>
                            </div>
                        </div>
                        <div className="bg">
                            <div class="avatar-bordered">
                                <div className="heart"><FaHeart /></div>
                            </div>
                        </div>
                        <div class="select">
                            <img src="https://res.cloudinary.com/blackneasy/image/upload/v1593848797/Jixie.jpg" alt="" />
                            <div class="select-infos">
                                <h2>Jixie</h2>
                                <p>Pappa</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="wrapper puppies-images">
                {
                    imageData.response.resources.map(image => {
                        return (
                            <Puppy key={image.public_id} image_id={image.public_id} />
                        )
                    })
                }
            </div>

        </Fragment>
    )
}

export default Puppies;
