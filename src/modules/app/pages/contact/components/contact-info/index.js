import React from 'react';
import translate from '../../../../../../shared/utils/translate';

import "./style.scss"

export default function ContactInfo() {
    return (
        <section className="contact-info">
            <header className="text-center">
                <h2 className="section-heading"> {translate("contactInfo")} </h2>
            </header>

            <main className="info-body">
                <ul>
                    <li>  <a href="tel:01158737518"> &#9742; 01158737518</a> </li>
                </ul>
            </main>
        </section>
    );
}
