import React from 'react';
import translate from '../../../../../../shared/utils/translate';

import "./style.scss"

export default function ContactInfo({context}) {
    return (
        <section className="contact-info">
            <header className="text-center">
                <h2 className="section-heading"> {translate("contactInfo")} </h2>
            </header>

            <main className={`${context.lang === "ar" ? "text-right" : "text-left"} info-body`}>
                <ul>
                    <li>  <a className={`flex ${context.lang === "ar" ? "reverse text-right" : "text-left"}`} href="tel:01158737518"> <span> &#9742; </span> <span> 01158737518 </span></a> </li>
                </ul>
            </main>
        </section>
    );
}
