import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";

export default function DetailNote({ catchNote, deleteNote, changeArchived }) {
	const { id } = useParams();
	const navigate = useNavigate();

	function backPage() {
		navigate(-1);
	}

	function deleteThisNote(event) {
		navigate(-1);
		setTimeout(() => deleteNote(event), 50);
	}

	const data = catchNote(id);

	return (
		<div className="detail-note">
			<div className="detail-note__detail-area">
				<h2 className="detail-note__title">{data.title}</h2>
				<p className="detail-note__createdAt">{data.createdAt}</p>
				<div className="detail-note__body">{parser(data.body)}</div>
			</div>
			<div className="detail-note__button-area" id={data.id}>
				<button className="detail-note__button" onClick={backPage}>
					Back
				</button>
				<button className="detail-note__button" onClick={changeArchived}>
					{data.archived ? "Unarchive" : "Archive"}
				</button>
				<button className="detail-note__button" onClick={deleteThisNote}>
					Delete
				</button>
			</div>
		</div>
	);
}

DetailNote.propTypes = {
	catchNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
