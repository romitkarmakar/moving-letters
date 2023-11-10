import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

export class BeautifulQuestions extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

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
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
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
