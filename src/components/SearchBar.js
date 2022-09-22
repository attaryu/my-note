import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import { GoSearch } from "react-icons/go";

export default function SearchBar({ getNotesBySearch }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const titleNote = searchParams.get("title");

	function changeKeyword(keyword) {
		setSearchParams({ title: keyword });
	}

	return (
		<SearchBarControl
			keyword={titleNote}
			changeKeyword={changeKeyword}
			getNotesBySearch={getNotesBySearch}
		/>
	);
}

class SearchBarControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: this.props.keyword || "",
		};

		this.onSearchKeyInput = this.onSearchKeyInput.bind(this);
	}

	componentDidMount() {
		if (this.props.keyword) {
			this.props.getNotesBySearch(this.props.keyword);
		}
	}

	onSearchKeyInput(event) {
		const keyword = event.target.value;
		this.props.changeKeyword(keyword);
		this.props.getNotesBySearch(keyword);
		this.setState(() => {
			return {
				searchKey: keyword,
			};
		});
	}

	render() {
		return (
			<div className="search-bar">
				<GoSearch className="search-bar__icon" />
				<input
					type="text"
					onChange={this.onSearchKeyInput}
					value={this.state.searchKey}
					className="search-bar__input"
					placeholder="Search..."
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	getNotesBySearch: PropTypes.func.isRequired,
};
