$("#pass").on("keydown keyup paste", function() {
	$("#request").text("Submit");
	if ($("#pass").val() == "") {
		$("#request").addClass("disabled");
	} else {
		$("#request").removeClass("disabled");
		if (event.keyCode == "13") {
    		console.log("submit")
        	submit();
    	}
	}
});

function submit() {
	// Nice one it will be harder next time
	if ($("#pass").val() == "c00kies") {
		console.log("Passed");
		window.location = "baked/cookies.txt";
	} else {
		$("#request").text("Try Again");
	}
}