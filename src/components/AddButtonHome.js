import React from "react";
import { Link } from "react-router-dom";

import { MdAddCircleOutline } from "react-icons/md";

export default function AddButtonHome() {
	return (
		<Link to="/add" className="add-button-home">
			<MdAddCircleOutline className="add-button-home__icon" />
			<p className="add-button-home__text">Add note</p>
		</Link>
	);
}
