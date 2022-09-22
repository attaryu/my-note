export default function notifTrigger(word) {
	document.querySelector(".pop-up__text").innerHTML = word;
	const popUp = document.querySelector(".pop-up");

	popUp.classList.add("pop-up--active");
	setTimeout(() => {
		popUp.classList.remove("pop-up--active");
	}, 2000);
}
