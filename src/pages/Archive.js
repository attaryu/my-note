import React, { useEffect } from "react";
import PropTypes from "prop-types";

import HeaderPage from "../components/HeaderPage";
import ShowNotes from "../components/ShowNotes";

export default function Archive({
	notes,
	getNotesBySearch,
	deleteNote,
	changeArchived,
}) {
	useEffect(() => {
		document.title = "Archive";
	});

	return (
		<section className="archive">
			<HeaderPage getNotesBySearch={getNotesBySearch} forArchive={true} />
			<ShowNotes
				notes={notes}
				forArchive={true}
				deleteNote={deleteNote}
				changeArchived={changeArchived}
			/>
		</section>
	);
}

Archive.propTypes = {
	notes: PropTypes.array.isRequired,
	getNotesBySearch: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
