import React from 'react';
import ServiceItem from './service-item';

import translate from "../../../../../../shared/utils/translate";

import "./style.scss";

export default function Services() {
    return (
        <>
            <section className="services-section text-center">
                <header>
                    <h2 className="section-heading"> {translate("services")} </h2>
                    <span className="heading-break"></span>
                </header>

                <div className="container">
                    <main className="services-items">
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                    </main>
                </div>
            </section>
        </>
    );
}
