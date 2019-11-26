import React from 'react';
import translate from '../../../../../../../../shared/utils/translate';

import "./style.scss";

export default function Clients({ client }) {
  return (
    <article className="clients-item">
      <p className="clients-item-number"> {client.toLocaleString()} </p>
      <h3> {translate("clients")} </h3>
      <p className="clients-item-data"> {translate("clientsData")} </p>
    </article>
  );
}
