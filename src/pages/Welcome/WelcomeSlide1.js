import React from "react";
import { Link } from "react-router-dom";
import { FaRegSmileBeam } from "react-icons/fa";

import Figure from "../../components/Figure";

import hero from "../../assets/png/hero.png";

export default function WelcomeSlide1() {
	return (
		<div>
			<h1 className="welcome__title">
				Welcome to <br />
				<span className="welcome__myNote">myNote </span>
				<FaRegSmileBeam />
			</h1>

			<Figure figCaption="" classFigure="welcome__figure-hero">
				<img src={hero} alt="myNote" className="welcome__image-1" />
			</Figure>

			<p className="welcome__body">
				Hi, selamat datang di myNote! <br />
				Catat harian kamu disini
			</p>

			<Link to="/user" className="welcome__button-next">
				Next
			</Link>
		</div>
	);
}
