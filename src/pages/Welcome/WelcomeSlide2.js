import React from "react";
import PropTypes from "prop-types";

import Figure from "../../components/Figure";
import ProfileForm from "../../components/ProfileForm";

import unknown from "../../assets/avatar/unknown.png";
import man from "../../assets/avatar/man.png";
import woman from "../../assets/avatar/woman.png";

export default class WelcomeSlide2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			gender: "",
			image: unknown,
		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onGenderChange = this.onGenderChange.bind(this);
		this.onPushProfile = this.onPushProfile.bind(this);
	}

	onNameChange(event) {
		const value = event.target.value ? event.target.value : "";

		if (value.length <= 12) {
			this.setState(() => {
				return {
					name: value,
				};
			});
		}
	}

	onGenderChange(event) {
		const value = event.target.value ? event.target.value : "";

		this.setState(() => {
			return {
				gender: value,
				image: value === "male" ? man : woman,
			};
		});
	}

	onPushProfile() {
		this.props.profileChange({
			name: this.state.name || "user",
			gender: this.state.gender || "unknown",
			image: this.state.image,
		});
	}

	render() {
		return (
			<div>
				<h1 className="welcome__title-2">Isi profile kamu!</h1>
				<p className="welcome__body">
					Isi nama, gender kamu, untuk <br /> pengalaman yang lebih baik
				</p>
				<Figure
					figCaption={this.state.name || "User"}
					classFigure="welcome__figure-preview"
					classFigCaption="welcome__name-user"
				>
					<img
						src={this.state.image}
						alt={`${this.state.name} profile's`}
						className="welcome__image-user"
					/>
				</Figure>
				<ProfileForm
					data={this.state}
					onNameChange={this.onNameChange}
					onGenderChange={this.onGenderChange}
					onPushProfile={this.onPushProfile}
				/>
			</div>
		);
	}
}

WelcomeSlide2.propTypes = {
	profileChange: PropTypes.func.isRequired,
};
