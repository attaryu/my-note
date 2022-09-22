import React from "react";
import PropTypes from "prop-types";

import LinkNavigation from "./LinkNavigation";
import ProfileCard from "./ProfileCard";

export default function Sidebar({ name, image }) {
	return (
		<nav className="side-bar">
			<ProfileCard name={name} image={image} />
			<LinkNavigation />
		</nav>
	);
}

Sidebar.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};
