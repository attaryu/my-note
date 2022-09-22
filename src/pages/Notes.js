import React, { useEffect } from "react";
import PropTypes from "prop-types";

import HeaderPage from "../components/HeaderPage";
import ShowNotes from "../components/ShowNotes";

export default function Notes({
	notes,
	getNotesBySearch,
	deleteNote,
	changeArchived,
}) {
	useEffect(() => {
		document.title = "Notes";
	});

	return (
		<section className="notes">
			<HeaderPage getNotesBySearch={getNotesBySearch} forArchive={false} />
			<ShowNotes
				notes={notes}
				forArchive={false}
				deleteNote={deleteNote}
				changeArchived={changeArchived}
			/>
		</section>
	);
}

Notes.propTypes = {
	notes: PropTypes.array.isRequired,
	getNotesBySearch: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
