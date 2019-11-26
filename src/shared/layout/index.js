import React from 'react';

import Navbar from "../navbar";
import Footer from "../footer";
import { LanguageContextProvider } from '../../contexts/language-context';

export default function Layout({ children }) {
    return (
        <>
            <LanguageContextProvider.Consumer>
                {context => (
                    <>
                        <Navbar context={context} />
                        {children}
                        <Footer context={context} />
                    </>
                )}
            </LanguageContextProvider.Consumer>
        </>
    );
}
