import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function AddNote({ addingNote }) {
	const navigate = useNavigate();
	return <AddNoteControl addingNote={addingNote} navigate={navigate} />;
}

class AddNoteControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
		};

		this.inputOnChange = this.inputOnChange.bind(this);
		this.submitData = this.submitData.bind(this);
		this.backPage = this.backPage.bind(this);
	}

	inputOnChange(event) {
		const target = event.target;

		if (target.id === "title" && target.value.length > 50) {
			return;
		} else {
			this.setState(() => {
				if (target.id === "body") {
					return {
						body: target.innerHTML,
					};
				} else {
					return {
						title: target.value,
					};
				}
			});
		}
	}

	submitData(event) {
		event.preventDefault();

		this.props.addingNote({
			id: String(+new Date()),
			title: this.state.title,
			body: this.state.body,
			createdAt: moment().format("DD MMM YYYY, h:mm a"),
			archived: false,
		});
		this.props.navigate("/notes");
	}

	backPage() {
		this.props.navigate(-1);
	}

	componentDidMount() {
		document.title = "Add Note";
	}

	render() {
		const limit =
			this.state.title.length >= 50
				? " add-note__input-title-limit--active"
				: "";

		return (
			<div className="add-note">
				<form className="add-note__form" onSubmit={this.submitData}>
					<p className={`add-note__input-title-limit${limit}`}>
						{this.state.title.length}
						/50
					</p>
					<input
						type="text"
						id="title"
						name="title"
						className="add-note__input-title"
						placeholder="Title..."
						value={this.state.title}
						onChange={this.inputOnChange}
						required
					/>
					<div
						id="body"
						name="body"
						className="add-note__input-body"
						data-placeholder="Body..."
						contentEditable
						onInput={this.inputOnChange}
					></div>
					<div className="add-note__button-area">
						<button className="add-note__back" onClick={this.backPage}>
							Back
						</button>
						<button type="submit" className="add-note__submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

AddNote.propTypes = {
	addingNote: PropTypes.func.isRequired,
};
