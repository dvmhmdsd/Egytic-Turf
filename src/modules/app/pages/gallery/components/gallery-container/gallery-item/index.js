import React from 'react';

import "./style.scss"

export default function GalleryItem({item}) {
  return (
    <section className="gallery-item">
        <img src={`${item.imageUrl}`} alt="item"/>
    </section>
  );
}
