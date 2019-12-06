$("#pass").on("keydown keyup paste", function() {
	$("#request").text("Submit");
	if ($("#pass").val() == "") {
		$("#request").addClass("disabled");
	} else {
		$("#request").removeClass("disabled");
	}
});

function submit() {
	// Nice one it will be harder next time
	if ($("#pass").val() == "c00kies") {
		console.log("Passed");
		window.location = "baked/cookies.yum";
	} else {
		$("#request").text("Try Again");
	}
}