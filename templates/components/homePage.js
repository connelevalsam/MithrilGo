import m from "mithril";

let HomePage = {
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
			m('div', {class: ""}, [
				m('div', {class: "w-100 w-third-m w-30-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img1.jpg",
							class: "cover h5-l"
						})
					])
				]),
				
				m('div', {class: "w-100 w-third-m w-30-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img6.jpg",
							class: "cover h5-l"
						})
					])
				]),

				m('div', {class: "w-100 w-third-m w-40-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img5.jpg",
							class: "cover h5-l"
						})
					])
				])
			]),
			m('div', {class: ""}, [
				m('div', {class: "w-100 w-two-thirds-m w-70-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img2.jpg",
							class: "cover"
						})
					])
				]),
				
				m('div', {class: "w-100 w-third-m w-30-l dib-ns v-top"},[
					m('div', {class: "ph3-ns pt3-ns"}, [
						m('img', {
							src: "../assets/img/img3.jpg",
							class: "cover h5-l"
						})
					])
				])
			]),
			m('div', {class: "mt3-l"}, [
				m('div', {class: "w-100 w-third-m w-30-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img1.jpg",
							class: "cover h5-l"
						})
					])
				]),
				
				m('div', {class: "w-100 w-third-m w-30-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img6.jpg",
							class: "cover h5-l"
						})
					])
				]),

				m('div', {class: "w-100 w-third-m w-40-l dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img5.jpg",
							class: "cover h5-l"
						})
					])
				])
			]),
			m('div', {class: ""}, [
				m('div', {class: "w-100 w-40-ns dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img1.jpg",
							class: "cover h5-l"
						})
					])
				]),
				
				m('div', {class: "w-100 w-40-ns dib-ns"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img6.jpg",
							class: "cover h5-l"
						})
					])
				]),

				m('div', {class: "w-100 w-20-ns dib-ns v-top-m pt3-m"},[
					m('div', {class: "ph3-ns"}, [
						m('img', {
							src: "../assets/img/img5.jpg",
							class: "cover h5-l"
						})
					])
				])
			]),
		])
	])
}

export default HomePage;

/*
src: "https://via.placeholder.com/150",
src: "../assets/img/img6.jpg"
*/