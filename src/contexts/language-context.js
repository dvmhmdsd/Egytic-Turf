import React, { Component, createContext } from "react";

export const LanguageContextProvider = createContext()

export default class LanguageProvider extends Component {
    state = {
        lang: this.checkLanguage() ? this.returnLangParam() : (localStorage.getItem("languages") ? localStorage.getItem("languages") : "en")
    }

    // check if the link has a language keyword or not
    checkLanguage() {
        return window.location.pathname.includes("en") || window.location.pathname.includes("ar");
    }

    // return the language keyword to get the right language into the context
    returnLangParam() {
        return window.location.pathname.slice(1, 3);
    }

    // update the url to add the lang key
    updateUrl(lang) {
        let location = window.location.pathname;
        // if the location has a lang key already, then remove it and add the new one
        if (location.slice(1, 3).match(/en|ar/)) {
            window.history.pushState("language routing", "language", `/${lang}${location.slice(3)}`)
        } else {
            window.history.pushState("language routing", "language", `/${lang}${location}`)
        }
    }

    changeLanguage = e => {
        let langKey = e.target.dataset.language;

        this.setState({
            lang: langKey
        });

        localStorage.setItem("languages", langKey);

        this.updateUrl(langKey);
    }

    render() {
        return (
            <LanguageContextProvider.Provider
                value={{ ...this.state, changeLanguage: this.changeLanguage }}
            >
                {this.props.children}
            </LanguageContextProvider.Provider>
        )
    }
}
