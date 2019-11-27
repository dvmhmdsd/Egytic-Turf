import React, { Component } from 'react'

import galleryImage1 from "../../../../../../assets/1.jpg";
import galleryImage2 from "../../../../../../assets/2.jpg";
import galleryImage3 from "../../../../../../assets/3.jpg";

import "./style.scss";
import GalleryItem from './gallery-item';

import Carousel from "react-bootstrap/Carousel";

export default class GalleryContainer extends Component {
  state = {
    galleryItems: [
      { imageUrl: galleryImage1, caption: "Example for caption image" },
      { imageUrl: galleryImage2, caption: "Example for caption image" },
      { imageUrl: galleryImage3, caption: "Example for caption image" },
      { imageUrl: galleryImage2, caption: "Example for caption image" },
      { imageUrl: galleryImage3, caption: "Example for caption image" },
      { imageUrl: galleryImage1, caption: "Example for caption image" },
    ],
    isModalOpen: false,
    index: 0,
  }

  customizeModal = () => {
    if (this.state.isModalOpen) {
      document.body.classList.add("modal-opened");
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.classList.remove("modal-opened");
      document.body.style.position = '';
      document.body.style.top = ``;
    }
  }

  showModal = (e) => {
    e.stopPropagation();

    this.setState({
      isModalOpen: true
    }, this.customizeModal);
  }

  hideModal = (e) => {
    e.stopPropagation();

    this.setState({
      isModalOpen: false
    });
  }

  componentDidMount() {
    
  }

  handleSelect = (selectedIndex) => {
    this.setState({
      index: selectedIndex
    })
  }

  handleClick = (idx, e) => {
    e.stopPropagation();
    this.showModal(e);

    this.setState({
      index: idx
    })
  }

  render() {
    return (
      <>
        <section className="gallery-cards-wrapper">

          {this.state.galleryItems.map((item, idx) => (
            <div className="card-item" onClick={(e) => {
              this.handleClick(idx, e)
            }} key={idx}>
              <GalleryItem item={item} />
            </div>
          ))}
        </section>

        {this.state.isModalOpen && <section onClick={e => e.stopPropagation()} className="gallery-slider text-center">
          <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            {this.state.galleryItems.map((item, idx) => (
              <Carousel.Item key={idx}>
                <GalleryItem item={item} />
              </Carousel.Item>
            ))}
          </Carousel>
          <button className="hide-slider" onClick={this.hideModal}> hide </button>
        </section>}
      </>
    )
  }
}
