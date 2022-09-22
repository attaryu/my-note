import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import { CgDetailsMore } from "react-icons/cg";
import { BiArchiveIn } from "react-icons/bi";
import { BiArchiveOut } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function Card({ note, archive, deleteNote, changeArchived }) {
	if (!archive && note.archived === false) {
		return (
			<div className="card">
				<h2 className="card__title">{note.title}</h2>
				<p className="card__createAt">{note.createdAt}</p>
				<div className="card__body">{parser(note.body)}</div>
				<div className="card__button-area">
					<Link to={`/note/${note.id}`} className="card__link">
						<CgDetailsMore className="card__button-icon" />
					</Link>
					<button
						className="card__button"
						onClick={changeArchived}
						id={note.id}
					>
						<BiArchiveIn className="card__button-icon" id={note.id} />
					</button>
					<button
						className="card__button"
						onClick={deleteNote}
						id={note.id}
					>
						<AiOutlineDelete className="card__button-icon" id={note.id} />
					</button>
				</div>
			</div>
		);
	} else if (archive && note.archived === true) {
		return (
			<div className="card">
				<h2 className="card__title">{note.title}</h2>
				<p className="card__createAt">{note.createdAt}</p>
				<div className="card__body">{parser(note.body)}</div>
				<div className="card__button-area">
					<Link to={`/archive/${note.id}`} className="card__link">
						<CgDetailsMore className="card__button-icon" />
					</Link>
					<button
						className="card__button"
						onClick={changeArchived}
						id={note.id}
					>
						<BiArchiveOut className="card__button-icon" id={note.id} />
					</button>
					<button
						className="card__button"
						onClick={deleteNote}
						id={note.id}
					>
						<AiOutlineDelete className="card__button-icon" id={note.id} />
					</button>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	note: PropTypes.object.isRequired,
	archive: PropTypes.bool.isRequired,
	deleteNote: PropTypes.func.isRequired,
	changeArchived: PropTypes.func.isRequired,
};
