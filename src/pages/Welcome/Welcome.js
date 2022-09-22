import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";

import WelcomeSlide1 from "./WelcomeSlide1";
import WelcomeSlide2 from "./WelcomeSlide2";

export default function Welcome({ profileChange }) {
	useEffect(() => {
		document.title = `Hi, Welcome!`;
	});

	return (
		<section className="welcome">
			<Routes>
				<Route
					path="/"
					element={<WelcomeSlide1 />}
				/>
				<Route
					path="/user"
					element={<WelcomeSlide2 profileChange={profileChange} />}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</section>
	);
}

Welcome.propTypes = {
	profileChange: PropTypes.func.isRequired,
};
