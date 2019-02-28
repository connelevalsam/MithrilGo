package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

var (
	err   error
	templ *template.Template
)

func init() {
	templ, err = templ.ParseGlob("templates/*.html")
	if err != nil {
		log.Fatalln(err.Error())
	}
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/about", about)
	http.HandleFunc("/contact", contact)
	http.Handle("/assets/", http.FileServer(http.Dir(".")))
	fmt.Println("server running on port :9090")
	http.ListenAndServe(":9090", nil)
}
func index(writer http.ResponseWriter, request *http.Request) {
	title := "Home"
	err = templ.ExecuteTemplate(writer, "index.html", title)
	if err != nil {
		log.Println(err.Error())
		http.Error(writer, "there was an error", http.StatusInternalServerError)
		return
	}
	fmt.Println("Name of page: " + title)
}

func about(writer http.ResponseWriter, request *http.Request) {
	title := "About"

	err = templ.ExecuteTemplate(writer, "index.html", title)
	if err != nil {
		log.Println(err.Error())
		http.Error(writer, "there was an error", http.StatusInternalServerError)
		return
	}
	fmt.Println("Name of page: " + title)
}

func contact(writer http.ResponseWriter, request *http.Request) {
	title := "Contact"
	/*
		err = templ.ExecuteTemplate(writer, "contact.html", title)
		if err != nil {
			log.Println(err.Error())
			http.Error(writer, "there was an error", http.StatusInternalServerError)
			return
		}*/
	fmt.Println("Name of page: " + title)
}
