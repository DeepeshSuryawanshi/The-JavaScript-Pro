let promise = new Promise(function (resolve, reject) {
    resolve('Ps-Softech');
    reject("error acoure")
})

promise.then(function (successMessage) {
		//success handler function is invoked
		console.log("Sucess measssage" + successMessage);
	}, function (errorMessage) {
		console.log("error messsage" + errorMessage);
	});
