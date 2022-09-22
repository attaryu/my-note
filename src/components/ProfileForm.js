import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProfileForm({
	data,
	onNameChange,
	onGenderChange,
	onPushProfile,
}) {
	const classLimit =
		data.name.length === 12 ? " profile-form__input-name-limit--active" : "";

	return (
		<form className="profile-form">
			<p className={`profile-form__input-name-limit${classLimit}`}>
				{data.name.length}/12
			</p>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="User..."
				value={data.name}
				onChange={onNameChange}
				className="profile-form__input-name"
			/>
			<div className="profile-form__radio-area">
				<label className="profile-form__label-gender">
					<input
						type="radio"
						name="gender"
						value="male"
						onChange={onGenderChange}
						className="profile-form__input-gender"
					/>
					Male
				</label>
				<label className="profile-form__label-gender">
					<input
						type="radio"
						name="gender"
						value="female"
						onChange={onGenderChange}
						className="profile-form__input-gender"
					/>
					Female
				</label>
			</div>
			<Link to="/" className="profile-form__button" onClick={onPushProfile}>
				{data.name || data.gender ? "Submit" : "Skip"}
			</Link>
		</form>
	);
}

ProfileForm.propTypes = {
	data: PropTypes.object.isRequired,
	onNameChange: PropTypes.func.isRequired,
	onGenderChange: PropTypes.func.isRequired,
	onPushProfile: PropTypes.func.isRequired,
};
