import React, { Fragment } from "react";
import Breed from "../components/Breed";
import BreedPlan from "../components/BreedPlan";
import { FaHeart } from "react-icons/fa";
import Christmas from "../components/Christmas";
import FetchData from "../components/FetchData";
import Masonry from "../components/Masonry";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

const Landing = () => {
	const imageData = FetchData(
		"https://res.cloudinary.com/blackneasy/image/list/home.json",
		{}
	);
	if (!imageData.response) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<Fragment>
			<div className="banner">
				<div>
					<p>Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
				</div>
			</div>
			<div className="wrapper">
				<div className="wrapper">
					<Breed
						header={
							"Kimya och Dreamboy - Valpar väntas början av Juni (Groenendael / Tervueren)"
						}
						header2={
							"SE UCH SPH 1 LD STARTKLASS RLDN RLDF Thunderwolf's Dream Boy"
						}
						images={"breed_kimya_dreamboy"}
						imageMother={"profile/Kimya_profile_2"}
						imageFather={"profile/Dreamboy_profile"}
						nameMother={"Black'n Easy Kimya"}
						nameFather={"Thunderwolf's Dream Boy"}
					/>
				</div>
				<Masonry columns={4}>
					{imageData.response.resources.map((image) => {
						return (
							<Image
								key={image.public_id}
								cloudName="blackneasy"
								publicId={image.public_id}
							/>
						);
					})}
				</Masonry>
			</div>
		</Fragment>
	);
};

export default Landing;
