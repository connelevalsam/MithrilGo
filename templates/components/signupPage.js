import m from "mithril";

let Signup = {
	view: () => 

	m('main', {class: ""}, [
		m('header', {class: "trasparent ph2 ph5-ns"}, [
			m('div', {class: "w-100 w-30-ns tc tl-ns dib v-top"}, [
				m('a', {
					class: "cover link pointer",
					href: "#!/",
					oncreate: m.route.link
				}, 
				    m('h1', {class: "green ma0"}, "Logo") 
				)
			]),
			m('nav', {
				class: "w-100 w-70-ns dib tc pt3 v-top",
				style: "color: #005291"
			}, [
				m('a', {
					class: "f6 fw6 colors dim link pointer mr2 mr3-m mr4-l",
					href:"/about",
					oncreate: m.route.link
				}, "About Us"),
				m('a', {
					class: "f6 fw6 colors dim link pointer mr2 mr3-m mr4-l",
					href:"/login",
					oncreate: m.route.link
				}, "Sign in"),
				m('a', {
					class: "f6 fw6 colors dim link pointer mr2 mr3-m mr4-l",
					href:"/register",
					oncreate: m.route.link
				}, "Sign up"),
			]),
		]),

		m('section', {class: "ph2 pv2 pa4-ns"}, [
			m('div', {class: "tc"}, [
				m('h1', "About")
			])
		])
	])
}

export default Signup;