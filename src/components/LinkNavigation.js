import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegStickyNote } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";

export default function LinkNavigation() {
	function focusEffect(event) {
		document
			.querySelectorAll(".link-navigation__link")
			.forEach((link) =>
				link.classList.remove("link-navigation__link--active")
			);

		if (event.target.classList.contains("link-navigation__link")) {
			event.target.classList.add("link-navigation__link--active");
		} else {
			event.target.parentNode.classList.add("link-navigation__link--active");
		}
	}

	return (
		<div className="link-navigation">
			<Link
				to="/"
				className="link-navigation__link link-navigation__link--active"
				onClick={focusEffect}
			>
				<BiHomeAlt className="link-navigation__icon" />
				<p className="link-navigation__text">Home</p>
			</Link>
			<Link
				to="/notes"
				className="link-navigation__link"
				onClick={focusEffect}
			>
				<FaRegStickyNote className="link-navigation__icon" />
				<p className="link-navigation__text">Notes</p>
			</Link>
			<Link
				to="/archive"
				className="link-navigation__link"
				onClick={focusEffect}
			>
				<FiArchive className="link-navigation__icon" />
				<p className="link-navigation__text">Archive</p>
			</Link>
		</div>
	);
}
