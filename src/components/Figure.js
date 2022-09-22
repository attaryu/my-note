import React from "react";
import PropTypes from "prop-types";

export default function Figure({
	figCaption,
	children,
	classFigure,
	classFigCaption,
}) {
	return (
		<figure className={classFigure}>
			{children}
			<figcaption className={classFigCaption}>{figCaption}</figcaption>
		</figure>
	);
}

Figure.propTypes = {
	figCaption: PropTypes.string.isRequired,
	children: PropTypes.node,
	classFigure: PropTypes.string.isRequired,
	classFigCaption: PropTypes.string,
};
