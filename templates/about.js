import m from "mithril";

var about = {
    view: function () {
        return m("main", [
            m("header", {class: "bg-black"}, [
                m("div",{class: "w-100 w-30-ns dib"}, [
                    m("h1", {class: "white fw6 f1 ma0"}, "Logo"),
                ]),
                m("nav",{class: "w-100 w-70-ns dib"}, [
                    m("a", {class: "white link pa2", href: "#!/"}, "Home"),
                    m("a", {class: "white link pa2", href: "#!/contact"}, "Contact"),
                    m("a", {class: "white link pa2", href: "#!/about"}, "About"),
                ]),
            ]),
            m("section", {class: "bg-white ph3"}, [
                m("article", {class: "w-100 w-50-ns dib v-top"}, [
                    m("div", {class: "ph2"}, [
                        m("div", [
                            m("img.h4.cover.center[src='/assets/img/img6.jpg']")
                        ]),
                        m("div", [
                            m("a", {class: "pa2 link"}, "Read more")
                        ]),
                    ]),
                ]),
                m("article", {class: "w-100 w-50-ns dib v-top"}, [
                    m("div", {class: "ph2 w-50 dib"}, [
                        m("div", [
                            m("img.h4.cover.center[src='/assets/img/img4.jpg']")
                        ]),
                        m("div", [
                            m("a", {class: "pa2 link"}, "Read more")
                        ]),
                    ]),
                    m("div", {class: "ph2 w-50 dib"}, [
                        m("div", [
                            m("img.h4.cover.center[src='/assets/img/img1.jpg']")
                        ]),
                        m("div", [
                            m("a", {class: "pa2 link"}, "Read more")
                        ]),
                    ]),
                ]),
            ]),
            m("section", {class: "bg-transparent vh-50 tc"}, [
                m("button", {onclick: function () {
                        count++
                    }, class: "bg-blue pa3"}, "count!"),
                m("small", count),

            ]),
            m("section", {class: "bg-light-gray vh-50"}, [
                m("h1", "Hello")
            ]),
        ])
    }
}

export default about;