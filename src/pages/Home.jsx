import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';
import Christmas from '../components/Christmas';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>

            <div className="wrapper">
                <BreedPlan header={"Planerad parning till våren - Kimya och hane (ej klar) - Valpar till sommaren"}
                    header2={"Valpar till nya hem till sommaren - kontakta mig för intresse"}
                    images={"breed_kimya"}
                />
            </div>
        </Fragment>
    )
}

export default Landing;
