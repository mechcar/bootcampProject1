const funPlace = {};

funPlace.listPrompt = document.querySelector(".listPrompt");
funPlace.listPrompt.addEventListener("click", function (e) {
	e.preventDefault();
	Swal.fire({
		title: `Mailing List`,
		text: `Enter your email below to be added to the mailing list for future updates!`,
		icon: "info",
		confirmButtonText: "Return to Page",
		confirmButtonColor: "#08FDED",
		input: "email",
		background: "black",
	});
});
