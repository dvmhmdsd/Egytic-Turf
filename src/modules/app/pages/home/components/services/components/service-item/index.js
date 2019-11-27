import React from 'react';
import translate from '../../../../../../../../shared/utils/translate';

import "./style.scss";

export default function ServiceItem() {
    return (
        <article className="service-item">
            <img src="https://via.placeholder.com/100?text=logo" alt="service-caption" />

            <h3> {translate("service")} </h3>

            <p className="service-description"> {translate("serviceCaption")} </p>
        </article>
    );
}
