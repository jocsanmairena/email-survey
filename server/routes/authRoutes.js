const passport = require('passport');

module.exports = (app) => {
	app.get(
		//route to redirect
		'/auth/google',
		//get let passport with google strategyhandle this route
		passport.authenticate('google', {
			//information required
			scope: ['profile', 'email']
		})
	);
	//Google Strategy will handle the callback code request using passport
	app.get(
		//route after first granting google permission to authenticate
		//This route has a trailing code attached to it, used to retrive profile data
		'/auth/google/callback',
		//passport google stratery will translate the code the retrive the data
		passport.authenticate('google')
	);

	app.get(
		'/api/logout',
		(req, res) => {
			//logout is a fuction attached to the request object
			req.logout();
			res.send(req.user);
		});

	app.get(
		'/api/current_user', //route
		(request, response) => {
			//request and reponse  function
			// user is a property attached to the resquest object
			response.send(request.user);
		});
};