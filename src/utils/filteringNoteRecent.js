export default function filteringNoteRecent(notes, condition) {
	const resultfilter = notes
		.slice()
		.reverse()
		.filter((note) => note.archived === condition);

	const resultClass =
		resultfilter.length >= 1
			? "card-container"
			: resultfilter.length === 0 && "undefined";

	return [resultfilter, resultClass];
}
