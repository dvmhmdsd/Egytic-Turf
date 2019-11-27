import React from 'react';

import Navbar from "../navbar";
import Footer from "../footer";
import { LanguageContextProvider } from '../../contexts/language-context';

export default function Layout(props) {
    return (
        <>
            <LanguageContextProvider.Consumer>
                {context => (
                    <>
                        <Navbar inHome={props.inHome} context={context} />
                        {props.children}
                        <Footer context={context} />
                    </>
                )}
            </LanguageContextProvider.Consumer>
        </>
    );
}
