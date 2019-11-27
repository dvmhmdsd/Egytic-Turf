import React, { Component } from 'react'
import TestimonialItem from './components/testimonial-item'
import translate from '../../../../../../shared/utils/translate'

import "./style.scss";

export default class Testimonials extends Component {

    render() {
        return (
            <section className="testimonials-section text-center">
                <header>
                    <h2 className="section-heading"> {translate("testim")} </h2>
                </header>

                <main className="testimonials-items">
                    <div className="container">
                        <TestimonialItem />
                    </div>
                </main>
            </section>
        )
    }
}
