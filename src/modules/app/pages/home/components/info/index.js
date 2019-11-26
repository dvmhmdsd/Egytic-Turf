import React, { Component } from 'react';
import translate from '../../../../../../shared/utils/translate';
import Client from './components/client';

import "./style.scss"

export default class Info extends Component {
  state = {
    clients: [10752, 10752, 10752]
  }

  render() {
    let { clients } = this.state;
    return (
      <section className="info-section text-center">
        <section className="slogan-section">
          <p className="main-slogan"> {translate("slogan")} </p>
        </section>

        <main>
          <section className="clients-section">
            {clients.map((client, idx) => {
              return <Client client={client} key={idx} />
            })}
          </section>
        </main>
      </section>
    )
  }
}
