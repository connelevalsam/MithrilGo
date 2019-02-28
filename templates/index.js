var m = require("mithril");
import HomePage from "./components/homePage.js";
import About    from "./components/about.js";
import Signup   from "./components/signupPage.js";
import Signin   from "./components/signinPage.js";

var root = document.getElementById('homePage')

m.route(root, "/", {
	"/"        : HomePage,
	"/about"   : About,
	"/register": Signup,
	"/login"   : Signin
});