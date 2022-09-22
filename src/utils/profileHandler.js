const key = "THE_KEY";

export default function profileHandler(profileData) {
	if (localStorage.getItem(key) === null) {
		if (profileData) {
			localStorage.setItem(key, JSON.stringify(profileData));
		}
	} else {
		return JSON.parse(localStorage.getItem(key));
	}
}
