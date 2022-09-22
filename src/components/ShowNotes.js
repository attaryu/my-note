import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import NoteNotFound from "./NoteNotFound";

import filteringNoteRecent from "../utils/filteringNoteRecent";

export default function ShowNotes({
	notes,
	forArchive,
	deleteNote,
	changeArchived,
}) {
	const [filteringNotes, classContainer] = filteringNoteRecent(
		notes,
		forArchive
	);

	return (
		<div className="show-notes">
			<div className={`show-notes__${classContainer}`}>
				{filteringNotes.length >= 1
					? filteringNotes.map((note) => (
							<Card
								key={note.id}
								note={note}
								archive={forArchive}
								deleteNote={deleteNote}
								changeArchived={changeArchived}
							/>
					  ))
					: filteringNotes.length === 0 && <NoteNotFound />}
			</div>
		</div>
	);
}

ShowNotes.propTypes = {
	notes: PropTypes.array.isRequired,
	forArchive: PropTypes.bool.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
