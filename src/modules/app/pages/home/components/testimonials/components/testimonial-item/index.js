import React from 'react';
import translate from '../../../../../../../../shared/utils/translate';

import "./style.scss";

export default function TestimonialItem() {
  return (
    <section className="testimonial-item">
        <p className="testimonials-content"> {translate("testimonialsContent")} </p>
        <p className="testimonials-author"> John Doe </p>
    </section>
  );
}
