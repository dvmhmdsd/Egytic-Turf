import React from 'react';

import "./style.scss";

import translate from "../../../../../../shared/utils/translate";

export default function AboutContent({context}) {
    return (
        <section className="about-section" dir={`${context.lang === "ar" ? "rtl" : "ltr"}`} >
            <div className="container">
                <h2 className="about-intro"> {translate("aboutTitle")} </h2>

                <main className="about-body">
                    <p className="about-paragraph"> {translate("aboutBody1")} </p>

                    <p className="about-paragraph"> {translate("aboutBody2")} </p>
                </main>
            </div>
        </section>
    );
}
