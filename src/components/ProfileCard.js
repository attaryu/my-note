import React from "react";
import PropTypes from "prop-types";

export default function ProfileCard({ name, image }) {
	return (
		<div className="profile-card">
			<img src={image} alt="" className="profile-card__image" />
			<div className="profile-card__text">
				<p className="profile-card__hello">Hello,</p>
				<h3 className="profile-card__name">{name}</h3>
			</div>
		</div>
	);
}

ProfileCard.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};
