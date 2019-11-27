import React from 'react';

import "./style.scss"
import translate from '../utils/translate';

export default function PagePreface({ context }) {
  // return the actual pathname of the page
  let path = window.location.pathname.match(/en|ar/) ? window.location.pathname.slice(4) : window.location.pathname.slice(1);

  let pathUpper = path.replace(path[0], path[0].toUpperCase());
  return (
    <section className="preface-section" dir={`${context.lang === "ar" ? "rtl" : "ltr"}`} >
      <div className="overlay"></div>
      <div className="container">
        <h1 className="preface-intro"> {translate(`${pathUpper}`)} </h1>
        <p className="preface-path"> <a href="/"> {translate("Home")} </a> / <span>{translate(`${pathUpper}`)}</span> </p>
      </div>
    </section>
  );
}
