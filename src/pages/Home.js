import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Figure from "../components/Figure";
import AddButtonHome from "../components/AddButtonHome";
import Recent from "../components/Recent";

export default function Home({ day, notes, deleteNote, changeArchived }) {
	const today = day.toLowerCase();

	useEffect(() => {
		document.title = "Home";
	});

	return (
		<section className="home">
			<Figure
				classFigure="home-banner"
				figCaption={`Happy ${today} :)`}
				classFigCaption="home-banner__text"
			/>
			<Recent
				notes={notes}
				forArchive={false}
				heading="Recent notes"
				deleteNote={deleteNote}
				changeArchived={changeArchived}
			/>
			<div className="home__button-add-area">
				<AddButtonHome />
			</div>
			<Recent
				notes={notes}
				forArchive={true}
				heading="Recent archive"
				deleteNote={deleteNote}
				changeArchived={changeArchived}
			/>
			<Figure
				classFigure="remind"
				classFigCaption="remind__text"
				figCaption={`Come on, write something down on your ${today}!`}
			>
				<img
					src={`./assets/day/${today}.svg`}
					alt={today}
					className="remind__image"
				/>
			</Figure>
		</section>
	);
}

Home.propTypes = {
	day: PropTypes.string.isRequired,
	notes: PropTypes.array.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
