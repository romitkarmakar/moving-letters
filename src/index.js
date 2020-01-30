import React, { Component } from "react";
import PropTypes from "prop-types";
// import "style.css";
import anime from "animejs";

export class SunnyMorning extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    var textWrapper = document.querySelector(".ml2");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  render() {
    const { text } = this.props;

    return <h1 className="ml2">{text}</h1>;
  }
}

export class GreatThings extends Component {
  componentDidMount() {
    var textWrapper = document.querySelector(".ml3");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }
  render() {
    return <h1 className="ml3">{this.props.text}</h1>;
  }
}

export class BeautifulQuestions extends Component {
  componentDidMount() {
    var textWrapper = document.querySelector(".ml6 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }
  render() {
    return (
      <h1 className="ml6">
        <span className="text-wrapper">
          <span className="letters">{this.props.text}</span>
        </span>
      </h1>
    );
  }
}

export class SignalNoise extends Component {
  componentDidMount() {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml5 .line",
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      })
      .add({
        targets: ".ml5 .line",
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em"
      })
      .add({
        targets: ".ml5 .ampersand",
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600"
      })
      .add({
        targets: ".ml5 .letters-left",
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=300"
      })
      .add({
        targets: ".ml5 .letters-right",
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600"
      })
      .add({
        targets: ".ml5",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }
  render() {
    return (
      <h1 class="ml5">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters letters-left">Signal</span>
          <span class="letters ampersand">&amp;</span>
          <span class="letters letters-right">Noise</span>
          <span class="line line2"></span>
        </span>
      </h1>
    );
  }
}
