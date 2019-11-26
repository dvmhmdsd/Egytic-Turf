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

    changeLanguage = e => {
        this.setState({
            lang: e.target.dataset.language
        });

        localStorage.setItem("languages", e.target.dataset.language);
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
