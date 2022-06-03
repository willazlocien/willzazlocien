import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Modal,
  Slide,
  Caption,
  Table,
  Carousel,
  Card,
} from "react-materialize";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/1.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/1.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/2.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/2.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/3.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/3.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/4.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/4.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/5.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/5.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/6.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/6.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/7.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/7.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/8.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/8.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/9.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/9.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/10.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/10.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/11.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/11.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/12.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/12.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/13.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/13.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/14.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/14.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/15.webp",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/15.webp",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/16.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/16.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/17.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/17.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/18.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/18.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/19.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/19.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/20.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/20.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/21.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/21.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/22.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/22.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/23.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/23.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/24.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/24.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/25.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/25.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/26.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/26.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/27.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/27.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/28.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/28.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/29.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/29.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/30.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/30.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/31.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/31.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/32.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/32.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/33.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/33.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/34.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/34.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/35.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/35.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/36.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/36.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/37.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/37.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/38.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/38.jpg",
  },
  {
    original: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/39.jpg",
    thumbnail: "https://raw.githubusercontent.com/mieszkaniaczernochowice/stronaDeweloperka/main/public/assets/39.jpg",
  },


 
];

export default class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
