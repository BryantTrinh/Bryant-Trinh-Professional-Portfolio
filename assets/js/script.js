// mailjs script

function SendMail() {
	var params = {
		from_name: document.getElementById("fullName").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	emailjs
		.send("service_ouu4kpm", "template_7tj0ia5", params)
		.then(function (res) {
			alert("Success! " + res.status);
		});
}
