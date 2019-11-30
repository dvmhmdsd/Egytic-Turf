import React from 'react'

import languages from "../shared/languages.json";
import { LanguageContextProvider } from '../contexts/language-context.js';

/**
 * Translate a word according to the key, the language key & the json file (source)
 * 
 * @param {string} translateKey
 */
const translator = (translateKey) => {
    return (
        <LanguageContextProvider.Consumer>
            {({ lang }) => {
                return lang ? languages[lang][translateKey] : languages["en"][translateKey]
            }}
        </LanguageContextProvider.Consumer>
    )
}

export function addTranslation(Component) {
    console.log(Component)
    return (
        <Component translate={translator} /> // doesn't render so it doesn't pass any props to the component
    )
}

export default {
    provider: {
        name: "translation",
        call: addTranslation
    }
}
