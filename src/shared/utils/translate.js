import React from 'react'

import languages from "../languages.json";
import { LanguageContextProvider } from '../../contexts/language-context.js';

/**
 * Translate a word according to the key, the language key & the json file (source)
 * 
 * @param {string} translateKey
 */
export default (translateKey) => {
    return (
        <LanguageContextProvider.Consumer>
            {({ lang }) => {
                return lang ? languages[lang][translateKey] : languages["en"][translateKey]
            }}
        </LanguageContextProvider.Consumer>
    )
}
