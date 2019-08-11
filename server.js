const express = require('express');
const mongoose = require('mongoose');
//enable cookies
const cookieSession = require('cookie-session');
const passport = require('passport');
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
};
//const keys = require('./config/keys');
//this imports our passportStrategies, currently only google
//we are not pulling any code out of passportStrategies file.
//We simply want to execute it,
//thus, there is not reason to assigned top a constant variable
require('./models/UserModel');
//the user model is defined first since it is later retrive
//on the passportStrategy
require('./services/passportStrategy');
const app = express();
app.use(
	cookieSession({
		//days * hours * min * sec * miliseconds
		// how long it will last this cookies
		maxAge: 30 * 24 * 60 * 60 * 10000,
		keys: [process.env.COOKIE_KEY]
	})
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
//Connecting to Mongo DB using mongoose.
mongoose.connect(process.env.MONGO_DB_URI, {
	useNewUrlParser: true
});
//this require below,  immediately returns a fuction,
//which we pass the app const in the file as argument
authRoutes(app);
app.listen(PORT, () => {
	console.log('Server running on port ' + PORT);
});