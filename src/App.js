import React from "react";
import { Routes, Route } from "react-router-dom";
import moment from "moment/moment";

import Welcome from "./pages/Welcome/Welcome";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";
import PageNotFound from "./pages/PageNotFound";
import PopUp from "./components/PopUp";

import notif from "./utils/notif";
import profileHandler from "./utils/profileHandler";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: "notes-1",
					title: "Babel",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
				{
					id: "notes-2",
					title: "Functional Component",
					body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
				{
					id: "notes-3",
					title: "Modularization",
					body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
				{
					id: "notes-4",
					title: "Lifecycle",
					body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
				{
					id: "notes-5",
					title: "ESM",
					body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
				{
					id: "notes-6",
					title: "Module Bundler",
					body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
					createdAt: moment().format("DD MMM YYYY, h:mm a"),
					archived: false,
				},
			],
			searchResult: [],
			profile: profileHandler(),
			day: moment().format("dddd"),
		};

		this.profileChange = this.profileChange.bind(this);
		this.catchNote = this.catchNote.bind(this);
		this.getNotesBySearch = this.getNotesBySearch.bind(this);
		this.addingNote = this.addingNote.bind(this);
		this.changeArchived = this.changeArchived.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
	}

	profileChange(data) {
		this.setState(() => {
			return {
				profile: data,
			};
		});

		notif("Profile saved");
	}

	catchNote(id) {
		return this.state.notes.filter((note) => note.id === id && note)[0];
	}

	getNotesBySearch(word) {
		this.setState(() => {
			if (word.length !== 0) {
				const keyword = word.toLowerCase();
				const data = this.state.notes.filter((note) =>
					note.title.toLowerCase().match(keyword)
				);

				if (data.length === 0) {
					return {
						searchResult: null,
					};
				} else {
					return {
						searchResult: data,
					};
				}
			} else {
				return {
					searchResult: [],
				};
			}
		});
	}

	addingNote(data) {
		this.setState((prev) => {
			return {
				notes: [...prev.notes, data],
			};
		});

		notif("Note added");
	}

	changeArchived(event) {
		const id = event.target.parentNode.id;
		this.setState((prev) => {
			const deleting = prev.notes.filter((note) => note.id !== id);
			const data = prev.notes.filter((note) => note.id === id);
			data.map((note) => (note.archived = note.archived ? false : true));

			return {
				notes: [...deleting, ...data],
			};
		});

		notif("Note changes");
	}

	deleteNote(event) {
		const id = event.target.parentNode.id;
		this.setState((prev) => {
			return {
				notes: prev.notes.filter((note) => note.id !== id),
			};
		});
		notif("Note deleted");
	}

	componentDidUpdate() {
		if (this.state.profile !== null) {
			profileHandler(this.state.profile);
		}
	}

	render() {
		const shorter = this.state;
		const notes =
			shorter.searchResult === null
				? []
				: shorter.searchResult.length === 0
				? shorter.notes
				: shorter.searchResult;

		return (
			<>
				{shorter.profile && (
					<div className="container">
						<Sidebar
							name={shorter.profile.name}
							image={shorter.profile.image}
						/>
						<main className="main">
							<Routes>
								<Route
									path="/"
									element={
										<Home
											day={shorter.day}
											notes={shorter.notes}
											deleteNote={this.deleteNote}
											changeArchived={this.changeArchived}
										/>
									}
								/>

								<Route
									path="/notes"
									element={
										<Notes
											notes={notes}
											getNotesBySearch={this.getNotesBySearch}
											deleteNote={this.deleteNote}
											changeArchived={this.changeArchived}
										/>
									}
								/>

								<Route
									path="/archive"
									element={
										<Archive
											notes={notes}
											getNotesBySearch={this.getNotesBySearch}
											deleteNote={this.deleteNote}
											changeArchived={this.changeArchived}
										/>
									}
								/>

								<Route
									path="/add"
									element={<AddNote addingNote={this.addingNote} />}
								/>

								<Route
									path="/note/:id"
									element={
										<DetailNote
											catchNote={this.catchNote}
											deleteNote={this.deleteNote}
											changeArchived={this.changeArchived}
										/>
									}
								/>

								<Route
									path="/archive/:id"
									element={
										<DetailNote
											catchNote={this.catchNote}
											deleteNote={this.deleteNote}
											changeArchived={this.changeArchived}
										/>
									}
								/>

								<Route path="*" element={<PageNotFound />} />
							</Routes>
						</main>
					</div>
				)}
				{!shorter.profile && <Welcome profileChange={this.profileChange} />}
				<PopUp />
			</>
		);
	}
}
