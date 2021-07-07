const funPlace = {};

funPlace.modals = function () {
	funPlace.buttons = document.getElementsByClassName("button");
	for (let i = 0; i < funPlace.buttons.length; i++) {
		funPlace.buttons[i].addEventListener("click", function (e) {
			e.preventDefault();
			Swal.fire({
				title: `Info!`,
				text: `Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Iure in laboriosam dignissimos autem
                blanditiis hic. Delectus eius, repellendus tenetur
                maxime placeat iusto velit quasi asperiores`,
				icon: "info",
				confirmButtonText: "Return to Page",
				confirmButtonColor: "#474BB5",
			});
		});
	}
};

funPlace.init = function () {
	funPlace.modals();
};

funPlace.init();
