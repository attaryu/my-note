import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import Card from "./Card";
import NoteNotFound from "./NoteNotFound";

import filteringNoteRecent from "../utils/filteringNoteRecent";

export default function Recent({
	heading,
	notes,
	forArchive,
	deleteNote,
	changeArchived,
}) {
	const [filteringNotes, classContainer] = filteringNoteRecent(
		notes,
		forArchive,
		5
	);
	const linked = forArchive ? "archive" : "notes";

	return (
		<section className="recent">
			<div className="recent__header">
				<h2 className="recent__heading">{heading}</h2>
				<Link to={`/${linked}`}>
					<BsFillArrowRightSquareFill className="recent__arrow" />
				</Link>
			</div>

			<div className={`recent__${classContainer}`}>
				{filteringNotes.length >= 1
					? filteringNotes.map(
							(note, i) =>
								i < 5 && (
									<Card
										note={note}
										key={note.id}
										archive={forArchive}
										deleteNote={deleteNote}
										changeArchived={changeArchived}
									/>
								)
					  )
					: filteringNotes.length === 0 && <NoteNotFound />}
			</div>
		</section>
	);
}

Recent.propTypes = {
	heading: PropTypes.string.isRequired,
	notes: PropTypes.array.isRequired,
	forArchive: PropTypes.bool.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
