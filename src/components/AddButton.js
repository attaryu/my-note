import React from "react";
import { Link } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";

export default function AddButton() {
	return (
		<Link to="/add" className="add-button">
			<IoMdAdd className="add-button__icon" />
			<MdAddCircleOutline className="add-button__icon-full" />
			<p className="add-button__text">Add new note</p>
		</Link>
	);
}
