import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import AddButton from "./AddButton";

export default function HeaderPage({ getNotesBySearch, forArchive }) {
	return (
		<header className="header-page">
			<SearchBar getNotesBySearch={getNotesBySearch} />
			{!forArchive && (
				<div className="header-page__button-area">
					<AddButton />
				</div>
			)}
		</header>
	);
}

HeaderPage.propTypes = {
	forArchive: PropTypes.bool.isRequired,
	getNotesBySearch: PropTypes.func.isRequired,
};
