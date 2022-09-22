import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NotFound from "../assets/png/404.png";

export default function PageNotFound() {
	const goBack = useNavigate();

	function back() {
		goBack(-1);
	}

	useEffect(() => {
		document.title = "404 Page not found";
	});

	return (
		<div className="page-not-found">
			<img src={NotFound} alt="" className="page-not-found__image" />
			<h2 className="page-not-found__title">Page not found</h2>
			<button className="page-not-found__button" onClick={back}>
				Go Back
			</button>
		</div>
	);
}
