
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from 'reactstrap';
// fotos

import sliderfoto1 from '../images/sliderfoto1.png';
import sliderfoto2 from '../images/sliderfoto2.png';


import {
  Carousel,
  CarouselItem,
  CarouselControl

} from "reactstrap";

const items = [
  {
    src:sliderfoto1,
  
  },
  {
    src:sliderfoto2,
    // altText: "",
    // caption: ""
  },
 
];


var lastX = 0;
var currentX = 0;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleMouse = e => {
    e.persist();
    let type = e.type.toLowerCase();
    if (type === "dragstart") {
      lastX = e.clientX;
    } else {
      if (lastX === 0 || e.clientX === 0 || lastX === e.clientX) {
        return;
      }
      if (e.clientX > lastX) {
        this.previous();
        console.log("swife right");
      } else {
        this.next();
        console.log("swife left");
      }
    }
  };

  handleTouch = e => {
    e.persist();
    let type = e.type.toLowerCase();

    if (type === "touchstart") {
      lastX = e.touches[0].clientX;
    }

    if (type === "touchmove") {
      currentX = e.touches[0].clientX;
    }

    if (type === "touchend") {
      if (lastX === 0 || currentX === 0 || lastX === currentX) {
        return;
      }
      if (currentX > lastX) {
        this.previous();
        console.log("swife right");
      } else {
        this.next();
        console.log("swife left");
      }
    }
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            style={{ width: "100%" }}
            src={item.src}
            alt={item.altText}
            onTouchStart={e => this.handleTouch(e)}
            onTouchMove={e => this.handleTouch(e)}
            onTouchEnd={e => this.handleTouch(e)}
            onDragStart={e => this.handleMouse(e)}
            onDragEnd={e => this.handleMouse(e)}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {slides}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
//uncontrolled mueve las imagenes
const Example = () => <UncontrolledCarousel items={items} />;

export default Example;

//export default Slider;